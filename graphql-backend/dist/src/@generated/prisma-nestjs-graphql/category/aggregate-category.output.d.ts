import { CategoryCountAggregate } from './category-count-aggregate.output';
import { CategoryMinAggregate } from './category-min-aggregate.output';
import { CategoryMaxAggregate } from './category-max-aggregate.output';
export declare class AggregateCategory {
    _count?: CategoryCountAggregate;
    _min?: CategoryMinAggregate;
    _max?: CategoryMaxAggregate;
}
