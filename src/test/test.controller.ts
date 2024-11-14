import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  async getQuestions() {
    return this.testService.getAllQuestions();
  }

  @Post()
  async addQuestion(
    @Body('text') text: string,
    @Body('options') options: string[],
  ) {
    return this.testService.addQuestion(text, options);
  }
}