import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { authGuard } from 'src/auth/authGuard/auth.guard';
import { UserRequest } from 'src/auth/decorators/user.decorator';
import { User } from '@prisma/client';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @UseGuards(authGuard)
  @Post()
  create(@Body() publucationInfo: CreatePublicationDto, @UserRequest() user:User) {
    return this.publicationService.create(publucationInfo,user.id);
  }

  @UseGuards(authGuard)
  @Get()
  findAll(@UserRequest() user:User) {
    return this.publicationService.findAllUserPublications(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublicationDto: UpdatePublicationDto) {
    return this.publicationService.update(+id, updatePublicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicationService.remove(+id);
  }
}
