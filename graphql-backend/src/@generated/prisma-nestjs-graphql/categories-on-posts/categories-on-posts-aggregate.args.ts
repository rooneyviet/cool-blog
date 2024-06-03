import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesOnPostsWhereInput } from './categories-on-posts-where.input';
import { Type } from 'class-transformer';
import { CategoriesOnPostsOrderByWithRelationInput } from './categories-on-posts-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CategoriesOnPostsCountAggregateInput } from './categories-on-posts-count-aggregate.input';
import { CategoriesOnPostsMinAggregateInput } from './categories-on-posts-min-aggregate.input';
import { CategoriesOnPostsMaxAggregateInput } from './categories-on-posts-max-aggregate.input';

@ArgsType()
export class CategoriesOnPostsAggregateArgs {

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

    @Field(() => CategoriesOnPostsCountAggregateInput, {nullable:true})
    _count?: CategoriesOnPostsCountAggregateInput;

    @Field(() => CategoriesOnPostsMinAggregateInput, {nullable:true})
    _min?: CategoriesOnPostsMinAggregateInput;

    @Field(() => CategoriesOnPostsMaxAggregateInput, {nullable:true})
    _max?: CategoriesOnPostsMaxAggregateInput;
}
