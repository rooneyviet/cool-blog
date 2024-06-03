import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PostCountOrderByAggregateInput } from './post-count-order-by-aggregate.input';
import { PostAvgOrderByAggregateInput } from './post-avg-order-by-aggregate.input';
import { PostMaxOrderByAggregateInput } from './post-max-order-by-aggregate.input';
import { PostMinOrderByAggregateInput } from './post-min-order-by-aggregate.input';
import { PostSumOrderByAggregateInput } from './post-sum-order-by-aggregate.input';
export declare class PostOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    views?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    published?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: SortOrderInput;
    authorId?: SortOrderInput;
    _count?: PostCountOrderByAggregateInput;
    _avg?: PostAvgOrderByAggregateInput;
    _max?: PostMaxOrderByAggregateInput;
    _min?: PostMinOrderByAggregateInput;
    _sum?: PostSumOrderByAggregateInput;
}
