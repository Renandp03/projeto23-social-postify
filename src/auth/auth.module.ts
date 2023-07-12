import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [JwtModule.register({
    secret:process.env.JWT_SECRET
  })],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UserService]
})
export class AuthModule {}
