import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from './dto/CreateUser.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}
    async createUser(userInfo: CreateUserDTO) : Promise<User>{
        const {name, email, password, avatar} = userInfo;
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

    async findUserById(userId:number){
        try {
        return this.prisma.user.findUniqueOrThrow({where:{id:userId}})
        } catch (error) {
            throw new NotFoundException();
        }
    }
}
