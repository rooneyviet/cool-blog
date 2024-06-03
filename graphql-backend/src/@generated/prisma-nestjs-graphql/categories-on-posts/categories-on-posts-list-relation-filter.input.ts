import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesOnPostsWhereInput } from './categories-on-posts-where.input';

@InputType()
export class CategoriesOnPostsListRelationFilter {

    @Field(() => CategoriesOnPostsWhereInput, {nullable:true})
    every?: CategoriesOnPostsWhereInput;

    @Field(() => CategoriesOnPostsWhereInput, {nullable:true})
    some?: CategoriesOnPostsWhereInput;

    @Field(() => CategoriesOnPostsWhereInput, {nullable:true})
    none?: CategoriesOnPostsWhereInput;
}
