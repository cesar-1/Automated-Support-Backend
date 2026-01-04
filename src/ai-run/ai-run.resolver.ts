import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AiRunService } from './ai-run.service';
import { AiRun } from './entities/ai-run.entity';
import { CreateAiRunInput } from './dto/create-ai-run.input';
import { UpdateAiRunInput } from './dto/update-ai-run.input';

@Resolver(() => AiRun)
export class AiRunResolver {
  constructor(private readonly aiRunService: AiRunService) {}

  @Mutation(() => AiRun)
  createAiRun(@Args('createAiRunInput') createAiRunInput: CreateAiRunInput) {
    return this.aiRunService.create(createAiRunInput);
  }

  @Query(() => [AiRun], { name: 'aiRun' })
  findAll() {
    return this.aiRunService.findAll();
  }

  @Query(() => AiRun, { name: 'aiRun' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.aiRunService.findOne(id);
  }

  @Mutation(() => AiRun)
  updateAiRun(@Args('updateAiRunInput') updateAiRunInput: UpdateAiRunInput) {
    return this.aiRunService.update(updateAiRunInput.id, updateAiRunInput);
  }

  @Mutation(() => AiRun)
  removeAiRun(@Args('id', { type: () => Int }) id: number) {
    return this.aiRunService.remove(id);
  }
}
