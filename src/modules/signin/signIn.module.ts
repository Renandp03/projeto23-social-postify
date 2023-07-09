import { Module } from '@nestjs/common';
import { SignInService } from './signIn.service';
import { SignInController } from './signIn.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SignInController],
  providers: [SignInService, PrismaService]
})
export class SigninModule {}
