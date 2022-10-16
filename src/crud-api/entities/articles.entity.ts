import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticlesDocument = Articles & Document;

@Schema()
export class Articles {
  @Prop({ required: true })
  name: string;

  @Prop()
  text: string;

  @Prop()
  id: number;

  // @Prop()
  // author: { name: string };
}

export const ArticlesSchema = SchemaFactory.createForClass(Articles);
