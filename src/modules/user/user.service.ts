import { Injectable } from '@nestjs/common';
import { User } from './entity/user';

@Injectable()
export class UserService {
    users : User[] = [];
    createUser(userInfo : User) : void {
        const user = new User(userInfo.name,userInfo.email,userInfo.password,userInfo.avatar); 
        this.users.push(userInfo);
    }

    findAllUsers():User[]{
        return this.users;
    }
}
