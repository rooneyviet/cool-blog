import { SortOrder } from '../prisma/sort-order.enum';
export declare class CategoriesOnPostsMaxOrderByAggregateInput {
    postId?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    assignedAt?: keyof typeof SortOrder;
    assignedBy?: keyof typeof SortOrder;
}
