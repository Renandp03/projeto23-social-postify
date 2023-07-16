import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export default class AuthSignInDTO {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string
}
