import { LikeWhereInput } from './like-where.input';
import { LikeOrderByWithAggregationInput } from './like-order-by-with-aggregation.input';
import { LikeScalarFieldEnum } from './like-scalar-field.enum';
import { LikeScalarWhereWithAggregatesInput } from './like-scalar-where-with-aggregates.input';
import { LikeCountAggregateInput } from './like-count-aggregate.input';
import { LikeMinAggregateInput } from './like-min-aggregate.input';
import { LikeMaxAggregateInput } from './like-max-aggregate.input';
export declare class LikeGroupByArgs {
    where?: LikeWhereInput;
    orderBy?: Array<LikeOrderByWithAggregationInput>;
    by: Array<keyof typeof LikeScalarFieldEnum>;
    having?: LikeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LikeCountAggregateInput;
    _min?: LikeMinAggregateInput;
    _max?: LikeMaxAggregateInput;
}
