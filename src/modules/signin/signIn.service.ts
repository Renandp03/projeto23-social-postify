import { Injectable, UnauthorizedException } from '@nestjs/common';
import SignIn from './entity/SignIn';
import { Prisma, Session, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { randomUUID } from "crypto";
import * as bcrypt from 'bcrypt';


@Injectable()
export class SignInService {
    constructor(private prisma: PrismaService){}

    async signIn(body:SignIn): Promise<Session>{
        const {email,password} = body;
        try {
            const user : User = await this.prisma.user.findFirstOrThrow({where:{email}});

            const isValidPassword = await bcrypt.compare(password,user.password);
            if(!isValidPassword) throw new Error();

            const session = await this.prisma.session.findFirst({where:{userId:user.id}});
            const token = randomUUID();

            if(session){
                return this.prisma.session.update({where:{userId:user.id}, data:{token}})
            }        
            return this.prisma.session.create({data:{userId:user.id,token}}) 
            
        } catch (error) {
            throw new UnauthorizedException('Email ou senha incorreto.');
        }
    }

    findAllSessions(): Promise<Session[]>{
        return this.prisma.session.findMany({});
    }

    deleteSession(userId:number): void{
        this.prisma.session.delete({where:{userId}});
    }
}
