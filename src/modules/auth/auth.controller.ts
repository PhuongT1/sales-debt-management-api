import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { CurrentUser } from "./current-user.decorator";
import { LoginDto } from "./dto/login.dto";
import { JwtAuthGuard, JwtAuthPayload } from "./jwt-auth.guard";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Đăng nhập bằng email/số điện thoại và mật khẩu" })
  @ApiBody({ type: LoginDto })
  @ApiUnauthorizedResponse({ description: "Sai tài khoản, mật khẩu hoặc tài khoản bị khóa." })
  @Post("login")
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: "Lấy thông tin user hiện tại từ Bearer token" })
  @ApiUnauthorizedResponse({ description: "Thiếu token hoặc token không hợp lệ." })
  @UseGuards(JwtAuthGuard)
  @Get("me")
  me(@CurrentUser() user: JwtAuthPayload) {
    return this.authService.getCurrentUser(user.sub);
  }
}
