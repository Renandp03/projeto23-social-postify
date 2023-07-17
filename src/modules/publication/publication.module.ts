import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret:process.env.JWT_SECRET
  })],
  controllers: [PublicationController],
  providers: [PublicationService, PrismaService, AuthService, UserService]
})
export class PublicationModule {}
