import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { Type } from 'class-transformer';
import { CategoriesOnPostsCreateInput } from './categories-on-posts-create.input';
import { CategoriesOnPostsUpdateInput } from './categories-on-posts-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';

@ArgsType()
export class UpsertOneCategoriesOnPostsArgs {

    @Field(() => CategoriesOnPostsWhereUniqueInput, {nullable:false})
    @Type(() => CategoriesOnPostsWhereUniqueInput)
    where!: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;

    @Field(() => CategoriesOnPostsCreateInput, {nullable:false})
    @Type(() => CategoriesOnPostsCreateInput)
    create!: CategoriesOnPostsCreateInput;

    @Field(() => CategoriesOnPostsUpdateInput, {nullable:false})
    @Type(() => CategoriesOnPostsUpdateInput)
    update!: CategoriesOnPostsUpdateInput;

    @Field(() => RelationLoadStrategy, {nullable:true})
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
