import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcrypt";
import { EXP_TIME_IN_DAYS } from "src/shared/constants";
import { SignInDto } from "./dto/sign-in.dto";
import { UserService } from "../user/user.service";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { RefreshTokenDto } from "./dto/refresh-token.dto";

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
      this.generateAccessToken({ userId: user.id, userEmail: user.email }),
      this.generateRefreshToken(user.id)
    ]);

    return {
      accessToken,
      refreshToken: refreshToken.id
    };
  }

  async refreshToken(refreshTokenDto: RefreshTokenDto) {
    const { refreshToken: refreshTokenId } = refreshTokenDto;

    const refreshToken = await this.prismaService.refreshToken.findUnique({
      where: { id: refreshTokenId },
      include: { user: true }
    });

    if (!refreshToken) {
      throw new UnauthorizedException("Invalid refresh token");
    }

    if (Date.now() > refreshToken.expires_at.getTime()) {
      await this.prismaService.refreshToken.delete({
        where: { id: refreshToken.id }
      });

      throw new UnauthorizedException("Invalid refresh token");
    }

    const accessToken = await this.generateAccessToken({
      userId: refreshToken.userId,
      userEmail: refreshToken.user.email
    });

    return {
      accessToken
    };
  }

  private async generateAccessToken(payload: {
    userId: string;
    userEmail: string;
  }) {
    return this.jwtService.signAsync({
      sub: payload.userId,
      email: payload.userEmail
    });
  }

  private async generateRefreshToken(userId: string) {
    const expiresAt = new Date();

    expiresAt.setDate(expiresAt.getDate() + EXP_TIME_IN_DAYS);

    await this.prismaService.refreshToken.deleteMany({
      where: { userId }
    });

    const refreshToken = await this.prismaService.refreshToken.create({
      data: { expires_at: expiresAt, userId }
    });

    return refreshToken;
  }
}
