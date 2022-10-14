import { PartialType } from '@nestjs/mapped-types';
import { CreateArticle } from './create-article.dto';

export class UpdateArticle extends PartialType(CreateArticle) {}
