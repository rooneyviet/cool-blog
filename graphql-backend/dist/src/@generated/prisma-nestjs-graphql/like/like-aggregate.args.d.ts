import { LikeWhereInput } from './like-where.input';
import { LikeOrderByWithRelationInput } from './like-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeCountAggregateInput } from './like-count-aggregate.input';
import { LikeMinAggregateInput } from './like-min-aggregate.input';
import { LikeMaxAggregateInput } from './like-max-aggregate.input';
export declare class LikeAggregateArgs {
    where?: LikeWhereInput;
    orderBy?: Array<LikeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: LikeCountAggregateInput;
    _min?: LikeMinAggregateInput;
    _max?: LikeMaxAggregateInput;
}
