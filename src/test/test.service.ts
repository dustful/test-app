import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './test.schema';

@Injectable()
export class TestService {
  constructor(@InjectModel(Question.name) private questionModel: Model<Question>) {}

  async getAllQuestions(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }

  async addQuestion(text: string, options: string[]): Promise<Question> {
    const newQuestion = new this.questionModel({ text, options });
    return newQuestion.save();
  }
}