import { CreateAiRunInput } from './create-ai-run.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAiRunInput extends PartialType(CreateAiRunInput) {
  @Field(() => Int)
  id: number;
}
