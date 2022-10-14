import { Injectable } from '@nestjs/common';
import { CreateArticle } from './dto/create-article.dto';
import { UpdateArticle } from './dto/update-article.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from './entities/article.entity';

@Injectable()
export class CrudApiService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  create(CreateArticle: CreateArticle) {
    const article = new this.articleModel(CreateArticle);
    return article.save();
  }

  findAll() {
    return this.articleModel.find();
  }

  findOne(id: string) {
    return this.articleModel.findById(id);
  }

  update(id: string, UpdateArticle: UpdateArticle) {
    return this.articleModel.findByIdAndUpdate(
      { _id: id },
      { $set: UpdateArticle },
      { new: true },
    );
  }

  remove(id: string) {
    return this.articleModel.deleteOne({ _id: id }).exec();
  }
}
