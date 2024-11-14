import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { Question, QuestionSchema } from './test.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Question.name, schema: QuestionSchema }])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}