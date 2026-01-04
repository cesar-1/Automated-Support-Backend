import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttatchmentService } from './attatchment.service';
import { Attatchment } from './entities/attatchment.entity';
import { CreateAttatchmentInput } from './dto/create-attatchment.input';
import { UpdateAttatchmentInput } from './dto/update-attatchment.input';

@Resolver(() => Attatchment)
export class AttatchmentResolver {
  constructor(private readonly attatchmentService: AttatchmentService) {}

  @Mutation(() => Attatchment)
  createAttatchment(@Args('createAttatchmentInput') createAttatchmentInput: CreateAttatchmentInput) {
    return this.attatchmentService.create(createAttatchmentInput);
  }

  @Query(() => [Attatchment], { name: 'attatchment' })
  findAll() {
    return this.attatchmentService.findAll();
  }

  @Query(() => Attatchment, { name: 'attatchment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attatchmentService.findOne(id);
  }

  @Mutation(() => Attatchment)
  updateAttatchment(@Args('updateAttatchmentInput') updateAttatchmentInput: UpdateAttatchmentInput) {
    return this.attatchmentService.update(updateAttatchmentInput.id, updateAttatchmentInput);
  }

  @Mutation(() => Attatchment)
  removeAttatchment(@Args('id', { type: () => Int }) id: number) {
    return this.attatchmentService.remove(id);
  }
}
