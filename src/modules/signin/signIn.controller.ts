import { Body, Controller, Get, Post } from '@nestjs/common';
import SignIn from './entity/SignIn';
import { SignInService } from './signIn.service';

@Controller('signIn')
export class SignInController {
  constructor(private readonly signinService: SignInService) {}

  @Post()
  async signIn(@Body() userAuth: SignIn): Promise<string> {
    const createdSession = await this.signinService.signIn(userAuth);
    return createdSession.token;
  }

  @Get()
  getSession(): any{
    return this.signinService.findAllSessions();
  }

}
