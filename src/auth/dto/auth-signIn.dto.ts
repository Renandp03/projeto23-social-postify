import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export default class AuthSignInDTO {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string
}
