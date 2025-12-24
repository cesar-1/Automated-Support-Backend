import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@ObjectType()
@Entity('categories')
export class Category {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 80, unique: true })
  name: string;

  @Field({ nullable: true })
  @Column({ length: 255, nullable: true })
  description?: string;

  @Field()
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
}