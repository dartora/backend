import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CrudApiModule } from './crud-api/crud-api.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rouko:ip6PXjZe0ydF417W@cluster0.wjc4oez.mongodb.net/test',
    ),
    CrudApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
