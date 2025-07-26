import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AnalyzeTextDto } from './dto/analyze-text.dto';

@Controller('analyze')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  analyze(@Body() body: AnalyzeTextDto) {
    return this.appService.analyzeText(body.text);
  }
}
