import { Field } from "@nestjs/graphql";
import { UsersService } from "../users.service";

export class UserService extends UsersService {
@Field({})
    id: string;

    @Field({})
    name: string;

    @Field({})
    email: string;

    @Field({})
    password_hash: string;

    @Field({})
    role: 'USER' | 'ADMIN' | 'AGENT';

    @Field({})
    is_active: boolean;

    @Field({})
    created_at: Date;
}