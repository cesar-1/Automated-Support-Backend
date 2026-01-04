import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAiRunInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
