import { SortOrder } from '../prisma/sort-order.enum';
export declare class CommentMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    text?: keyof typeof SortOrder;
    postId?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
