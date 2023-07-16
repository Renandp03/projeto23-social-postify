import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import AuthSignInDTO from './dto/auth-signIn.dto';
import AuthSignUpDTO from './dto/auth-signUp.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UserService, 
        private readonly prisma:PrismaService,
        private readonly jwtService:JwtService){}


    private ISSUER = 'Renan';
    private AUDIENCE = 'user';

    async signUp(body: AuthSignUpDTO) {
        const user = await this.userService.createUser(body);
        return this.createToken(user);
    }
    async signIn({email,password}: AuthSignInDTO){
        try {
            const user = await this.prisma.user.findUniqueOrThrow({where:{email}});
            const validPassword = bcrypt.compareSync(password, user.password);
            if(!validPassword) {
                throw new Error()};

            return this.createToken(user);
            
            
        } catch (error) {
            console.log(error)
            throw new UnauthorizedException('Email ou senha inválidos')
        }
    }

    async createToken(user:User){
        const token = this.jwtService.sign({
            name:user.name,
            email:user.email
        },{
            expiresIn:'7 days',
            subject: String(user.id),
            issuer:this.ISSUER,
            audience: this.AUDIENCE
        }
        );

        return { token };
    }

    async checkUserByToken(token:string){
        
        try {
            const data = await this.jwtService.verify(token,{issuer:this.ISSUER,audience:this.AUDIENCE});
            return data;
        } catch (error) {
            throw new BadRequestException(error);
        }       
    }
}
