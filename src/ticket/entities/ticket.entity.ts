import { ObjectType, Field, ID } from '@nestjs/graphql';
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  ManyToOne, 
  JoinColumn 
} from 'typeorm';
import { User } from 'Users/user.entity' ; // Path to your User entity
// import { Category } from './category.entity'; // Uncomment when you create Category

@ObjectType()
@Entity('tickets')
export class Ticket {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 160 })
  title: string;

  @Field()
  @Column({ type: 'text' })
  description: string;

  @Field()
  @Column({ length: 20, default: 'OPEN' })
  status: string; // Best practice: Use an Enum

  @Field()
  @Column({ length: 20, default: 'MEDIUM' })
  priority: string; // Best practice: Use an Enum

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  ai_suggested_reply: string;

  // --- RELATIONSHIPS ---

  @Field({ nullable: true })
  @Column({ type: 'uuid', nullable: true })
  category_id: string;

  // The User who created the ticket
  @Field(() => User, { nullable: true })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_by_id' })
  created_by: User;

  @Column({ type: 'uuid', nullable: true })
  created_by_id: string;

  // The Agent assigned to the ticket
  @Field(() => User, { nullable: true })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'assigned_to_id' })
  assigned_to: User;

  @Column({ type: 'uuid', nullable: true })
  assigned_to_id: string;

  // --- TIMESTAMPS ---

  @Field()
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;
}