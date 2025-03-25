import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AiGcpService } from './ai.gcp.service';
import { GenerateContent } from './dto/generateContent.d';

@Controller('ai')
export class AiController {
  constructor(private readonly aiGcpService: AiGcpService) {}


  @Post("generate-content")
  async generateContent(@Body() body: GenerateContent) {
    return await this.aiGcpService.generateContent(body);
  }
}
