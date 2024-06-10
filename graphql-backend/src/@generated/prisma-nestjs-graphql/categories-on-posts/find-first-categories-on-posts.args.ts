import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesOnPostsWhereInput } from './categories-on-posts-where.input';
import { Type } from 'class-transformer';
import { CategoriesOnPostsOrderByWithRelationInput } from './categories-on-posts-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CategoriesOnPostsScalarFieldEnum } from './categories-on-posts-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';

@ArgsType()
export class FindFirstCategoriesOnPostsArgs {

    @Field(() => CategoriesOnPostsWhereInput, {nullable:true})
    @Type(() => CategoriesOnPostsWhereInput)
    where?: CategoriesOnPostsWhereInput;

    @Field(() => [CategoriesOnPostsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoriesOnPostsOrderByWithRelationInput>;

    @Field(() => CategoriesOnPostsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CategoriesOnPostsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoriesOnPostsScalarFieldEnum>;

    @Field(() => RelationLoadStrategy, {nullable:true})
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
