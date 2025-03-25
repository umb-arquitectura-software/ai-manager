import { Module } from '@nestjs/common';
import { AiGcpService } from './ai.gcp.service';
import { AiController } from './ai.controller';

@Module({
  controllers: [AiController],
  providers: [AiGcpService],
  exports: [AiGcpService],
})
export class AiModule {}
