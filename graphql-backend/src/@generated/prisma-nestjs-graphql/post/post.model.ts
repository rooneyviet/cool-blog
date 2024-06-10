import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { CategoriesOnPosts } from '../categories-on-posts/categories-on-posts.model';
import { Like } from '../like/like.model';
import { Comment } from '../comment/comment.model';
import { PostCount } from './post-count.output';

@ObjectType()
export class Post {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    url!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Int, {nullable:false,defaultValue:0})
    views!: number;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false})
    published!: boolean;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:true})
    authorId!: string | null;

    @Field(() => User, {nullable:true})
    author?: User | null;

    @Field(() => [CategoriesOnPosts], {nullable:true})
    categories?: Array<CategoriesOnPosts>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => PostCount, {nullable:false})
    _count?: PostCount;
}
