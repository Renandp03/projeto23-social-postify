import { Body, Controller, Post } from '@nestjs/common';
import { SignInService } from './signIn.service';

@Controller('signIn')
export class SignInController {
  constructor(private readonly signinService: SignInService) {}

  @Post()
  signIn(@Body() userAuth: any): string {
    return 'session';
  }

}
