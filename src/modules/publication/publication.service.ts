import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';

@Injectable()
export class PublicationService {

  constructor(private readonly prisma:PrismaService){}
  create(publicationInfo: CreatePublicationDto, userId:number) {
    const {image,title,text,dateToPublish,published,socialMedia} = publicationInfo;
    return this.prisma.publication.create({
      data:{image,title,text,dateToPublish,published,socialMedia,userId}
    });
  }

  findAllUserPublications(userId:number) {
    return this.prisma.publication.findMany({where:{userId}});
  }

  findOne(id: number) {
    return `This action returns a #${id} publication`;
  }

  update(id: number, updatePublicationDto: UpdatePublicationDto) {
    return `This action updates a #${id} publication`;
  }

  remove(id: number) {
    return `This action removes a #${id} publication`;
  }
}
