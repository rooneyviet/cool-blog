import { SortOrder } from '../prisma/sort-order.enum';
import { CategoriesOnPostsCountOrderByAggregateInput } from './categories-on-posts-count-order-by-aggregate.input';
import { CategoriesOnPostsMaxOrderByAggregateInput } from './categories-on-posts-max-order-by-aggregate.input';
import { CategoriesOnPostsMinOrderByAggregateInput } from './categories-on-posts-min-order-by-aggregate.input';
export declare class CategoriesOnPostsOrderByWithAggregationInput {
    postId?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    assignedAt?: keyof typeof SortOrder;
    assignedBy?: keyof typeof SortOrder;
    _count?: CategoriesOnPostsCountOrderByAggregateInput;
    _max?: CategoriesOnPostsMaxOrderByAggregateInput;
    _min?: CategoriesOnPostsMinOrderByAggregateInput;
}
