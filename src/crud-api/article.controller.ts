import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CrudApiService } from './crud-api.service';
import { CreateArticle } from './dto/create-article.dto';
import { UpdateArticle } from './dto/update-article.dto';

@Controller('articles')
export class CrudApiController {
  constructor(private readonly crudApiService: CrudApiService) {}

  @Get()
  findAll() {
    return this.crudApiService.findAll();
  }
  @Post()
  create(@Body() CreateArticle: CreateArticle) {
    return this.crudApiService.create(CreateArticle);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudApiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateArticle: UpdateArticle) {
    return this.crudApiService.update(id, UpdateArticle);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudApiService.remove(id);
  }
}
