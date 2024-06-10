import { CommentWhereInput } from './comment-where.input';
import { CommentOrderByWithRelationInput } from './comment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCountAggregateInput } from './comment-count-aggregate.input';
import { CommentMinAggregateInput } from './comment-min-aggregate.input';
import { CommentMaxAggregateInput } from './comment-max-aggregate.input';
export declare class CommentAggregateArgs {
    where?: CommentWhereInput;
    orderBy?: Array<CommentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: CommentCountAggregateInput;
    _min?: CommentMinAggregateInput;
    _max?: CommentMaxAggregateInput;
}
