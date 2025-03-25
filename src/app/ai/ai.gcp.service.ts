import { BadRequestException, Injectable } from '@nestjs/common';
import { AiService } from './dto/ai.service';
import { GenerateContent } from './dto/generateContent.d';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from 'src/config/config';

@Injectable()
export class AiGcpService implements AiService {

  async generateContent(body: GenerateContent): Promise<any> {
    if (!body.contents) throw new BadRequestException('contents-required', 'contents is required');
    if (!body.systemInstruction) throw new BadRequestException('systemInstruction-required', 'systemInstruction is required');
    if (!body.model) throw new BadRequestException('model-required', 'model is required');

    const genAI = new GoogleGenerativeAI(config().gcp.apiKeyAi);
    const model = genAI.getGenerativeModel({ model: body.model });

    const generatedContent = await model.generateContent({
      contents: body.contents,
      systemInstruction: body.systemInstruction,
    });

    return { data: generatedContent.response.text() }
  }
}
