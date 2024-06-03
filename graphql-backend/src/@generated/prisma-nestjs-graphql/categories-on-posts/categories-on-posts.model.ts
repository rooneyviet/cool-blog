import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { Category } from '../category/category.model';

@ObjectType()
export class CategoriesOnPosts {

    @Field(() => String, {nullable:false})
    postId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Date, {nullable:false})
    assignedAt!: Date;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => Post, {nullable:false})
    post?: Post;

    @Field(() => Category, {nullable:false})
    category?: Category;
}
