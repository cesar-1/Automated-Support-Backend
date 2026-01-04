import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(() => ID, { description: 'Unique UUID for the comment' })
  id: string;

  @Field(() => ID, { description: 'The UUID of the associated ticket' })
  ticketId: string;

  @Field(() => ID, { description: 'The UUID of the user who authored the comment' })
  authorId: string;

  @Field(() => String, { description: 'The content of the comment' })
  body: string;

  @Field(() => Boolean, { 
    defaultValue: false, 
    description: 'Internal note flag' 
  })
  isInternal: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
