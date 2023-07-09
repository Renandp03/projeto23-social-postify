import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}
    async createUser(userInfo: User) : Promise<User>{
        const {name, email, password, avatar} = userInfo;
        const emailExists = await this.prisma.user.findUnique({where:{email}});
        if(emailExists) throw new ConflictException('este email não é válido')
        const hashPassword = bcrypt.hashSync(password,10) ;
        return this.prisma.user.create({
            data:{
                name,
                email,
                password: hashPassword,
                avatar
            }
        })
    }

    async findAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany({});
    }
}
