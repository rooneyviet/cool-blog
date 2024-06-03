import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CategoriesOnPosts } from '../categories-on-posts/categories-on-posts.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [CategoriesOnPosts], {nullable:true})
    posts?: Array<CategoriesOnPosts>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
