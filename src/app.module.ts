import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@auth/auth.module';
import { validateEnv } from '@config/env.validation';
import { DatabaseModule } from '@database/database.module';
import { ProtectedModule } from '@modules/protected/protected.module';
import { PublicModule } from '@modules/public/public.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validateEnv }),
    DatabaseModule,
    AuthModule,
    PublicModule,
    ProtectedModule,
  ],
})
export class AppModule {}
