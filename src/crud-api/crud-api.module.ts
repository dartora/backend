import { Module } from '@nestjs/common';
import { CrudApiService } from './crud-api.service';
import { CrudApiController } from './article.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Articles, ArticlesSchema } from './entities/articles.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Articles.name, schema: ArticlesSchema },
    ]),
  ],
  controllers: [CrudApiController],
  providers: [CrudApiService],
})
export class CrudApiModule {}
