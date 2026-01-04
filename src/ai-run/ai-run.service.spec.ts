import { Test, TestingModule } from '@nestjs/testing';
import { AiRunService } from './ai-run.service';

describe('AiRunService', () => {
  let service: AiRunService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiRunService],
    }).compile();

    service = module.get<AiRunService>(AiRunService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
