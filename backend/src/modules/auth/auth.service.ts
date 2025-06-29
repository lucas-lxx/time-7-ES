import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcrypt";
import { EXP_TIME_IN_DAYS } from "src/shared/constants";
import { SignInDto } from "./dto/sign-in.dto";
import { UserService } from "../user/user.service";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { User } from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;

    const user = await this.userService.findByEmail(email, true);

    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const passwordIsValid = await compare(password, user.password);

    if (!passwordIsValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const [accessToken, refreshToken] = await Promise.all([
      this.generateAccessToken({ userId: user.email }),
      this.generateRefreshToken(user)
    ]);

    return {
      accessToken,
      refreshToken: refreshToken.id
    };
  }

  private async generateAccessToken(payload: { userId: string }) {
    return this.jwtService.signAsync({
      sub: payload.userId
    });
  }

  private async generateRefreshToken(user: User) {
    const expiresAt = new Date();

    expiresAt.setDate(expiresAt.getDate() + EXP_TIME_IN_DAYS);

    const refreshToken = await this.prismaService.refreshToken.create({
      data: {
        expires_at: expiresAt,
        userEmail: user.email
      }
    });

    return refreshToken;
  }
}
