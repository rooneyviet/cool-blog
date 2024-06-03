import { PostWhereInput } from './post-where.input';
import { PostOrderByWithRelationInput } from './post-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostCountAggregateInput } from './post-count-aggregate.input';
import { PostAvgAggregateInput } from './post-avg-aggregate.input';
import { PostSumAggregateInput } from './post-sum-aggregate.input';
import { PostMinAggregateInput } from './post-min-aggregate.input';
import { PostMaxAggregateInput } from './post-max-aggregate.input';
export declare class PostAggregateArgs {
    where?: PostWhereInput;
    orderBy?: Array<PostOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    take?: number;
    skip?: number;
    _count?: PostCountAggregateInput;
    _avg?: PostAvgAggregateInput;
    _sum?: PostSumAggregateInput;
    _min?: PostMinAggregateInput;
    _max?: PostMaxAggregateInput;
}
