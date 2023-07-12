import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import AuthSignInDTO from './dto/auth-signIn.dto';
import AuthSignUpDTO from './dto/auth-signUp.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UserService, 
        private readonly prisma:PrismaService,
        private readonly jwtService:JwtService){}

    async signUp(body: AuthSignUpDTO) {
        const user = await this.userService.createUser(body);
        return this.createToken(user);
    }
    async signIn({email,password}: AuthSignInDTO){
        try {
        const user = await this.prisma.user.findFirstOrThrow({where:{email}});
            
        } catch (error) {
            throw new UnauthorizedException()
        }
    }

    async createToken(user:User){
        const token = this.jwtService.sign({
            name:user.name,
            email:user.email
        },{
            expiresIn:'7 days',
            subject: String(user.id),
            issuer:'Renan',
            audience:'user'
        }
        );

        return { token };
    }
}
