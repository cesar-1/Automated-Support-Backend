import { Module } from '@nestjs/common';
import { AttatchmentService } from './attatchment.service';
import { AttatchmentResolver } from './attatchment.resolver';

@Module({
  providers: [AttatchmentResolver, AttatchmentService],
})
export class AttatchmentModule {}
