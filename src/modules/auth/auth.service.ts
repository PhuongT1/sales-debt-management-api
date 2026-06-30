import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService, type JwtSignOptions } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { PrismaService } from "../../database/prisma.service";
import { UserStatus } from "../../generated/prisma";
import { LoginDto } from "./dto/login.dto";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(input: LoginDto) {
    const email = input.email.trim().toLowerCase();
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        passwordHash: true,
        role: true,
        status: true,
      },
    });

    if (!user?.passwordHash) {
      throw new UnauthorizedException("Sai tài khoản hoặc mật khẩu.");
    }

    if (user.status !== UserStatus.ACTIVE) {
      throw new UnauthorizedException("Tài khoản đã bị khóa.");
    }

    const isPasswordValid = await bcrypt.compare(input.password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Sai tài khoản hoặc mật khẩu.");
    }

    const safeUser = this.toSafeUser(user);
    const expiresIn = (this.configService.get<string>("JWT_EXPIRES_IN") ?? "7d") as JwtSignOptions["expiresIn"];
    const accessToken = await this.jwtService.signAsync(
      {
        sub: user.id,
        email: user.email,
        role: user.role,
      },
      {
        secret: this.configService.get<string>("JWT_SECRET"),
        expiresIn,
      } satisfies JwtSignOptions,
    );

    return {
      accessToken,
      tokenType: "Bearer",
      user: safeUser,
    };
  }

  async getCurrentUser(userId: string) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
      },
    });

    return this.toSafeUser(user);
  }

  private toSafeUser(user: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
  }): AuthUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    };
  }
}
