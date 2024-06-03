import { PostWhereInput } from './post-where.input';
import { PostOrderByWithAggregationInput } from './post-order-by-with-aggregation.input';
import { PostScalarFieldEnum } from './post-scalar-field.enum';
import { PostScalarWhereWithAggregatesInput } from './post-scalar-where-with-aggregates.input';
import { PostCountAggregateInput } from './post-count-aggregate.input';
import { PostAvgAggregateInput } from './post-avg-aggregate.input';
import { PostSumAggregateInput } from './post-sum-aggregate.input';
import { PostMinAggregateInput } from './post-min-aggregate.input';
import { PostMaxAggregateInput } from './post-max-aggregate.input';
export declare class PostGroupByArgs {
    where?: PostWhereInput;
    orderBy?: Array<PostOrderByWithAggregationInput>;
    by: Array<keyof typeof PostScalarFieldEnum>;
    having?: PostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostCountAggregateInput;
    _avg?: PostAvgAggregateInput;
    _sum?: PostSumAggregateInput;
    _min?: PostMinAggregateInput;
    _max?: PostMaxAggregateInput;
}
