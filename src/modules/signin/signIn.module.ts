import { Module } from '@nestjs/common';
import { SignInService } from './signIn.service';
import { SignInController } from './signIn.controller';

@Module({
  controllers: [SignInController],
  providers: [SignInService]
})
export class SigninModule {}
