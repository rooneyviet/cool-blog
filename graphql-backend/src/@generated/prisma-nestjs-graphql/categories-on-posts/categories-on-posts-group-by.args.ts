import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesOnPostsWhereInput } from './categories-on-posts-where.input';
import { Type } from 'class-transformer';
import { CategoriesOnPostsOrderByWithAggregationInput } from './categories-on-posts-order-by-with-aggregation.input';
import { CategoriesOnPostsScalarFieldEnum } from './categories-on-posts-scalar-field.enum';
import { CategoriesOnPostsScalarWhereWithAggregatesInput } from './categories-on-posts-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CategoriesOnPostsCountAggregateInput } from './categories-on-posts-count-aggregate.input';
import { CategoriesOnPostsMinAggregateInput } from './categories-on-posts-min-aggregate.input';
import { CategoriesOnPostsMaxAggregateInput } from './categories-on-posts-max-aggregate.input';

@ArgsType()
export class CategoriesOnPostsGroupByArgs {

    @Field(() => CategoriesOnPostsWhereInput, {nullable:true})
    @Type(() => CategoriesOnPostsWhereInput)
    where?: CategoriesOnPostsWhereInput;

    @Field(() => [CategoriesOnPostsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CategoriesOnPostsOrderByWithAggregationInput>;

    @Field(() => [CategoriesOnPostsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CategoriesOnPostsScalarFieldEnum>;

    @Field(() => CategoriesOnPostsScalarWhereWithAggregatesInput, {nullable:true})
    having?: CategoriesOnPostsScalarWhereWithAggregatesInput;

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
