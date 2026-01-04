import { ObjectType, Field, ID } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json'; // Optional: for strict JSON typing

@ObjectType()
export class AiRun {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  ticketId: string;

  @Field(() => AiRunKind)
  kind: AiRunKind;

  @Field(() => String)
  provider: string;

  @Field(() => String)
  model: string;

  @Field(() => AiRunStatus)
  status: AiRunStatus;

  @Field(() => String, { description: 'SHA-256 hash for deduplication' })
  promptHash: string;

  @Field(() => GraphQLJSON, { description: 'Snapshot of ticket data used as input' })
  inputSnapshot: any;

  @Field(() => GraphQLJSON, { nullable: true, description: 'AI generated response data' })
  output?: any;

  @Field(() => String, { nullable: true })
  errorMessage?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  completedAt?: Date;
}