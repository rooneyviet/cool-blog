import { LikeCountAggregate } from './like-count-aggregate.output';
import { LikeMinAggregate } from './like-min-aggregate.output';
import { LikeMaxAggregate } from './like-max-aggregate.output';
export declare class AggregateLike {
    _count?: LikeCountAggregate;
    _min?: LikeMinAggregate;
    _max?: LikeMaxAggregate;
}
