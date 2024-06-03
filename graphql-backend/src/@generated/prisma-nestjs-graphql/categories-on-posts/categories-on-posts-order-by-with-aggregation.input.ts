import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CategoriesOnPostsCountOrderByAggregateInput } from './categories-on-posts-count-order-by-aggregate.input';
import { CategoriesOnPostsMaxOrderByAggregateInput } from './categories-on-posts-max-order-by-aggregate.input';
import { CategoriesOnPostsMinOrderByAggregateInput } from './categories-on-posts-min-order-by-aggregate.input';

@InputType()
export class CategoriesOnPostsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedBy?: keyof typeof SortOrder;

    @Field(() => CategoriesOnPostsCountOrderByAggregateInput, {nullable:true})
    _count?: CategoriesOnPostsCountOrderByAggregateInput;

    @Field(() => CategoriesOnPostsMaxOrderByAggregateInput, {nullable:true})
    _max?: CategoriesOnPostsMaxOrderByAggregateInput;

    @Field(() => CategoriesOnPostsMinOrderByAggregateInput, {nullable:true})
    _min?: CategoriesOnPostsMinOrderByAggregateInput;
}
