import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Post } from '../post/post.model';
import { Like } from '../like/like.model';
import { Comment } from '../comment/comment.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    /**
     * @Validator.@IsEmail()
     */
    @Field(() => String, {nullable:false,description:'@Validator.@IsEmail()'})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false,defaultValue:'Active'})
    userStatus!: string;

    @HideField()
    password!: string;

    @Field(() => Role, {nullable:false,defaultValue:'ADMIN'})
    role!: keyof typeof Role;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
