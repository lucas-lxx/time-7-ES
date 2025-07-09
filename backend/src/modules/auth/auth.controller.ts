import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/sign-in.dto";
import { IsPublic } from "src/shared/decorators/isPublic";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { ApiCreatedResponse, ApiOperation, ApiResponse } from "@nestjs/swagger";

@IsPublic()
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Sign-in user with stateless token" })
  @ApiCreatedResponse({
    description: "The user has susccessfully logged in."
  })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
    example: {
      email: "lucas@example.com",
      password: "fdsa"
    }
  })
  @Post("sign-in")
  async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto);
  }

  @ApiOperation({ summary: "Refresh access token" })
  @ApiCreatedResponse({
    description: "The user has susccessfully refreshed the access token."
  })
  @ApiResponse({
    status: 400,
    description: "Bad Request",
    example: { refreshToken: "asdfasdfasdfasdf" }
  })
  @Post("refresh-token")
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    return await this.authService.refreshToken(refreshTokenDto);
  }
}
