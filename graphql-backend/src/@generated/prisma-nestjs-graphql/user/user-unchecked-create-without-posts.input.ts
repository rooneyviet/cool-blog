import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { LikeUncheckedCreateNestedManyWithoutUserInput } from '../like/like-unchecked-create-nested-many-without-user.input';
import { CommentUncheckedCreateNestedManyWithoutUserInput } from '../comment/comment-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutPostsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.MinLength(4)
    username!: string;

    @Field(() => String, {nullable:true})
    userStatus?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.MinLength(8)
    password!: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => LikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
}
