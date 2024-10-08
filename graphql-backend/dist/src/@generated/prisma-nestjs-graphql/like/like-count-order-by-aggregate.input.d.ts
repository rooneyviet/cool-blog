import { SortOrder } from '../prisma/sort-order.enum';
export declare class LikeCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    postId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
