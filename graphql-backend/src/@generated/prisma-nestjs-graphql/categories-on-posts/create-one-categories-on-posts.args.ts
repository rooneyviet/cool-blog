import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesOnPostsCreateInput } from './categories-on-posts-create.input';
import { Type } from 'class-transformer';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';

@ArgsType()
export class CreateOneCategoriesOnPostsArgs {

    @Field(() => CategoriesOnPostsCreateInput, {nullable:false})
    @Type(() => CategoriesOnPostsCreateInput)
    data!: CategoriesOnPostsCreateInput;

    @Field(() => RelationLoadStrategy, {nullable:true})
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
