import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { config } from './config/config';
import { AiModule } from './app/ai/ai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    AiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
