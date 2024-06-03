import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CategoriesOnPostsOrderByRelationAggregateInput } from '../categories-on-posts/categories-on-posts-order-by-relation-aggregate.input';
export declare class CategoryOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: SortOrderInput;
    posts?: CategoriesOnPostsOrderByRelationAggregateInput;
}
