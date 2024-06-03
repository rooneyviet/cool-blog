import { LikeCountAggregate } from './like-count-aggregate.output';
import { LikeMinAggregate } from './like-min-aggregate.output';
import { LikeMaxAggregate } from './like-max-aggregate.output';
export declare class LikeGroupBy {
    id: string;
    userId: string;
    postId: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: LikeCountAggregate;
    _min?: LikeMinAggregate;
    _max?: LikeMaxAggregate;
}
