import { Test, TestingModule } from '@nestjs/testing';
import { AttatchmentResolver } from './attatchment.resolver';
import { AttatchmentService } from './attatchment.service';

describe('AttatchmentResolver', () => {
  let resolver: AttatchmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttatchmentResolver, AttatchmentService],
    }).compile();

    resolver = module.get<AttatchmentResolver>(AttatchmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
