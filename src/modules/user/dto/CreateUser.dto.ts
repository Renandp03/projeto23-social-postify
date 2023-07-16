import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength } from "class-validator";

export class CreateUserDTO {
    @IsString()
    name: string

    @IsEmail()
    email: string

    @IsString()
    @MaxLength(20)
    @IsStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1})
    password: string

    @IsString()
    @IsNotEmpty()
    avatar: string
}