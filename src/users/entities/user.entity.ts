import { ObjectType, Field, ID } from '@nestjs/graphql';
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  ManyToMany
} from 'typeorm';
import { AuditTrailsEntity } from '../../common/entities/audit-trails.entity';
import { text } from 'stream/consumers';
import { Timestamp } from 'typeorm/browser';
import { time } from 'console';
import { UUID } from 'crypto';

@ObjectType() 
@Entity('users') 
export class Userentity extends AuditTrailsEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id: UUID; 

  @Column({ 
    type: 'varchar',
    length: 120,
    unique: false, 
    nullable: false })

  name: string;

  @Column({ type: 'varchar', length: 180, unique: true, nullable: false,})
  email: string;  

  @Column({ nullable: true, select: true, type: 'text' })
  password_hash: string;

 @Column({ type: 'varchar', length: 20, nullable:false, default: 'USER'})
 role: 'USER' | 'ADMIN' | 'AGENT';

@Column({ 
  type: 'boolean', 
  nullable: false, 
  default: true 
})
is_active: boolean;

@CreateDateColumn({ 
  type: 'timestamptz', 
  nullable: false, 
  default: () => 'CURRENT_TIMESTAMP' 
})
created_at: Date;


@UpdateDateColumn({ type:'timestamptz', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
updated_at: Date;
}