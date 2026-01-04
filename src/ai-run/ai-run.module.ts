import { Module } from '@nestjs/common';
import { AiRunService } from './ai-run.service';
import { AiRunResolver } from './ai-run.resolver';

@Module({
  providers: [AiRunResolver, AiRunService],
})
export class AiRunModule {}
