import { Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { authGuard } from './authGuard/auth.guard';
import { UserRequest } from './decorators/user.decorator';
import AuthSignInDTO from './dto/auth-signIn.dto';
import AuthSignUpDTO from './dto/auth-signUp.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @HttpCode(200)
    @Post('sign-in')
    async signIn(@Body() body:AuthSignInDTO){
        return this.authService.signIn(body)
    }

    @Post('sign-up')
    async signUp(@Body() body:AuthSignUpDTO){
        return this.authService.signUp(body)
    }

    @UseGuards(authGuard)
    @Get('me')
    async userLogged(@UserRequest() user:User){return user}
}
