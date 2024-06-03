import { SortOrder } from '../prisma/sort-order.enum';
import { LikeCountOrderByAggregateInput } from './like-count-order-by-aggregate.input';
import { LikeMaxOrderByAggregateInput } from './like-max-order-by-aggregate.input';
import { LikeMinOrderByAggregateInput } from './like-min-order-by-aggregate.input';
export declare class LikeOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    postId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: LikeCountOrderByAggregateInput;
    _max?: LikeMaxOrderByAggregateInput;
    _min?: LikeMinOrderByAggregateInput;
}
