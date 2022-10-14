import { Module } from '@nestjs/common';
import { CrudApiService } from './crud-api.service';
import { CrudApiController } from './article.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './entities/article.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [CrudApiController],
  providers: [CrudApiService],
})
export class CrudApiModule {}
