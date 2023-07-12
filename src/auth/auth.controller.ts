import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import AuthSignInDTO from './dto/auth-signIn.dto';
import AuthSignUpDTO from './dto/auth-signUp.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @Post('sign-in')
    async signIn(@Body() body:AuthSignInDTO){
        return this.authService.signIn(body)
    }

    @Post('sign-up')
    async signUp(@Body() body:AuthSignUpDTO){
        return this.authService.signUp(body)
    }
}
