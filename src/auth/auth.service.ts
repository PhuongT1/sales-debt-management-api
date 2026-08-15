import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, type JwtSignOptions } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '@database/prisma.service';
import { UserStatus } from '@generated/prisma';
import { LoginDto } from '@modules/public/auth/dto/login.dto';

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
};

type RefreshTokenPayload = {
  sub: string;
  email: string;
  role: string;
  type: 'refresh';
};

type AccessTokenPayload = {
  sub: string;
  email: string;
  role: string;
  type: 'access';
};

const DEFAULT_ACCESS_TOKEN_EXPIRES_IN = '15m';
const DEFAULT_REFRESH_TOKEN_EXPIRES_IN = '7d';

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
      throw new UnauthorizedException('Sai tài khoản hoặc mật khẩu.');
    }

    if (user.status !== UserStatus.ACTIVE) {
      throw new UnauthorizedException('Tài khoản đã bị khóa.');
    }

    const isPasswordValid = await bcrypt.compare(input.password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Sai tài khoản hoặc mật khẩu.');
    }

    return this.createTokenResponse(this.toSafeUser(user));
  }

  async refresh(refreshToken: string) {
    let payload: RefreshTokenPayload;

    try {
      payload = await this.jwtService.verifyAsync<RefreshTokenPayload>(refreshToken, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });
    } catch {
      throw new UnauthorizedException('Refresh token không hợp lệ hoặc đã hết hạn.');
    }

    if (payload.type !== 'refresh') {
      throw new UnauthorizedException('Refresh token không hợp lệ hoặc đã hết hạn.');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
      },
    });

    if (!user || user.status !== UserStatus.ACTIVE) {
      throw new UnauthorizedException('Tài khoản đã bị khóa hoặc không tồn tại.');
    }

    return this.createTokenResponse(this.toSafeUser(user));
  }

  private async createTokenResponse(user: AuthUser) {
    const accessTokenExpiresIn = (this.configService.get<string>('JWT_EXPIRES_IN') ??
      DEFAULT_ACCESS_TOKEN_EXPIRES_IN) as JwtSignOptions['expiresIn'];
    const refreshTokenExpiresIn = (this.configService.get<string>('JWT_REFRESH_EXPIRES_IN') ??
      DEFAULT_REFRESH_TOKEN_EXPIRES_IN) as JwtSignOptions['expiresIn'];
    const accessTokenExpiresAt = this.getExpiresAt(accessTokenExpiresIn);
    const accessTokenPayload: AccessTokenPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      type: 'access',
    };
    const refreshTokenPayload: RefreshTokenPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      type: 'refresh',
    };

    const accessToken = await this.jwtService.signAsync(accessTokenPayload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: accessTokenExpiresIn,
    } satisfies JwtSignOptions);
    const refreshToken = await this.jwtService.signAsync(refreshTokenPayload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: refreshTokenExpiresIn,
    } satisfies JwtSignOptions);

    return {
      accessToken,
      accessTokenExpiresAt,
      expiresIn: Math.max(0, Math.floor((accessTokenExpiresAt - Date.now()) / 1000)),
      refreshToken,
      tokenType: 'Bearer',
      user,
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

  private getExpiresAt(expiresIn: JwtSignOptions['expiresIn']) {
    if (typeof expiresIn === 'number') {
      return Date.now() + expiresIn * 1000;
    }

    const match = String(expiresIn)
      .trim()
      .match(/^(\d+)(ms|s|m|h|d)$/);
    if (!match) {
      return Date.now() + 15 * 60 * 1000;
    }

    const value = Number(match[1]);
    const unit = match[2];
    const multiplier =
      unit === 'ms'
        ? 1
        : unit === 's'
          ? 1000
          : unit === 'm'
            ? 60_000
            : unit === 'h'
              ? 3_600_000
              : 86_400_000;

    return Date.now() + value * multiplier;
  }
}
