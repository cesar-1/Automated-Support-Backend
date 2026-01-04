import { Test, TestingModule } from '@nestjs/testing';
import { AiRunResolver } from './ai-run.resolver';
import { AiRunService } from './ai-run.service';

describe('AiRunResolver', () => {
  let resolver: AiRunResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiRunResolver, AiRunService],
    }).compile();

    resolver = module.get<AiRunResolver>(AiRunResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
