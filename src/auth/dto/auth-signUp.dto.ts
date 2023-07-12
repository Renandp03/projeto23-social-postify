import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export default class AuthSignUpDTO {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;

    @IsString()
    avatar: string;    
}