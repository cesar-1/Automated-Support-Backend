import { Controller } from "@nestjs/common";
import { UsersService } from "../users.service";
import { Field } from "@nestjs/graphql";
@Controller('users')
export class UserController extends UsersService {

    @Field({nullable:false})
    id: string;

    @Field({nullable:false})
    name: string;

    @Field({nullable:false})
    email: string;

    @Field({nullable:true})
    password_hash: string;

    @Field({nullable:false})
    role: 'USER' | 'ADMIN' | 'AGENT';

    @Field({nullable:false})
    is_active: boolean;

    @Field({nullable:false})
    created_at: Date;

    
}