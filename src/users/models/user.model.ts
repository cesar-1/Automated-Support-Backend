import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserModel {
    @Field({ nullable: false})
    id: string;

    @Field({ nullable: false})
    name: string;

    @Field({ nullable: false})
    email: string;

    @Field({ nullable: true})
    password_hash: string;

    @Field({ nullable: false})
    role: 'USER' | 'ADMIN' | 'AGENT';

    @Field({ nullable: false})
    is_active: boolean;

    @Field({ nullable: false})
    created_at: Date;
}