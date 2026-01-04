import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Attachment {
  @Field(() => ID, { description: 'Unique UUID for the attachment' })
  id: string;

  @Field(() => ID, { 
    nullable: true, 
    description: 'The UUID of the ticket if attached directly' 
  })
  ticketId?: string;

  @Field(() => ID, { 
    nullable: true, 
    description: 'The UUID of the comment if attached to a specific message' 
  })
  commentId?: string;

  @Field(() => ID, { description: 'The UUID of the user who uploaded the file' })
  uploadedById: string;

  @Field(() => String, { description: 'The storage URL of the file' })
  url: string;

  @Field(() => Date)
  createdAt: Date;
}