import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './test/test.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/psychTest'),
    TestModule
  ],
  controllers: [AppController, MoviesController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
