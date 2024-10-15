import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '@/users/users.module';
// import { JwtModule } from '@nestjs/jwt';
// import { JwtStrategy, LocalStrategy } from './strategy';
// import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [ConfigModule, UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
