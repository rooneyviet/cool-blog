import { SortOrder } from '../prisma/sort-order.enum';
import { CommentCountOrderByAggregateInput } from './comment-count-order-by-aggregate.input';
import { CommentAvgOrderByAggregateInput } from './comment-avg-order-by-aggregate.input';
import { CommentMaxOrderByAggregateInput } from './comment-max-order-by-aggregate.input';
import { CommentMinOrderByAggregateInput } from './comment-min-order-by-aggregate.input';
import { CommentSumOrderByAggregateInput } from './comment-sum-order-by-aggregate.input';
export declare class CommentOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    text?: keyof typeof SortOrder;
    postId?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: CommentCountOrderByAggregateInput;
    _avg?: CommentAvgOrderByAggregateInput;
    _max?: CommentMaxOrderByAggregateInput;
    _min?: CommentMinOrderByAggregateInput;
    _sum?: CommentSumOrderByAggregateInput;
}
