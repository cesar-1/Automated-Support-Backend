import { CreateAttatchmentInput } from './create-attatchment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAttatchmentInput extends PartialType(CreateAttatchmentInput) {
  @Field(() => Int)
  id: number;
}
