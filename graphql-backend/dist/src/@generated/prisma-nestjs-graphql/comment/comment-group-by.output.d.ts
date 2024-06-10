import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';
export declare class CommentGroupBy {
    id: string;
    text: string;
    postId: string;
    userId: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: CommentCountAggregate;
    _min?: CommentMinAggregate;
    _max?: CommentMaxAggregate;
}
