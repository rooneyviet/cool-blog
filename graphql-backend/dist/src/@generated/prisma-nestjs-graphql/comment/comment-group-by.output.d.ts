import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentAvgAggregate } from './comment-avg-aggregate.output';
import { CommentSumAggregate } from './comment-sum-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';
export declare class CommentGroupBy {
    id: number;
    text: string;
    postId: string;
    userId: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: CommentCountAggregate;
    _avg?: CommentAvgAggregate;
    _sum?: CommentSumAggregate;
    _min?: CommentMinAggregate;
    _max?: CommentMaxAggregate;
}
