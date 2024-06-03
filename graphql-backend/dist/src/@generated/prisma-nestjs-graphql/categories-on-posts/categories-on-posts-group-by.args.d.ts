import { CategoriesOnPostsWhereInput } from './categories-on-posts-where.input';
import { CategoriesOnPostsOrderByWithAggregationInput } from './categories-on-posts-order-by-with-aggregation.input';
import { CategoriesOnPostsScalarFieldEnum } from './categories-on-posts-scalar-field.enum';
import { CategoriesOnPostsScalarWhereWithAggregatesInput } from './categories-on-posts-scalar-where-with-aggregates.input';
import { CategoriesOnPostsCountAggregateInput } from './categories-on-posts-count-aggregate.input';
import { CategoriesOnPostsMinAggregateInput } from './categories-on-posts-min-aggregate.input';
import { CategoriesOnPostsMaxAggregateInput } from './categories-on-posts-max-aggregate.input';
export declare class CategoriesOnPostsGroupByArgs {
    where?: CategoriesOnPostsWhereInput;
    orderBy?: Array<CategoriesOnPostsOrderByWithAggregationInput>;
    by: Array<keyof typeof CategoriesOnPostsScalarFieldEnum>;
    having?: CategoriesOnPostsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriesOnPostsCountAggregateInput;
    _min?: CategoriesOnPostsMinAggregateInput;
    _max?: CategoriesOnPostsMaxAggregateInput;
}
