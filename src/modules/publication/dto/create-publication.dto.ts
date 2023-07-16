import { IsBoolean, IsDateString, IsNotEmpty, IsString, Matches } from "class-validator";

export class CreatePublicationDto {

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    text: string;

    @IsDateString()
    @Matches(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
        message: "$ Use datas apenas no formato yyyy-mm-dd"
    })
    dateToPublish: string;

    @IsBoolean()
    @IsNotEmpty()
    published: boolean;

    @IsString()
    @IsNotEmpty()
    socialMedia: string;
}
