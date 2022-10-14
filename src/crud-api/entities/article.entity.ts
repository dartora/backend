import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop()
  name: string;

  @Prop()
  text: string;

  @Prop()
  id: number;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);