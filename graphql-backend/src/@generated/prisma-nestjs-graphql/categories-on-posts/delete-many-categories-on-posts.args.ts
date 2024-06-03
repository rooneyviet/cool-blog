import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesOnPostsWhereInput } from './categories-on-posts-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCategoriesOnPostsArgs {

    @Field(() => CategoriesOnPostsWhereInput, {nullable:true})
    @Type(() => CategoriesOnPostsWhereInput)
    where?: CategoriesOnPostsWhereInput;
}
