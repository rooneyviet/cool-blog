import { CategoryCountAggregate } from './category-count-aggregate.output';
import { CategoryMinAggregate } from './category-min-aggregate.output';
import { CategoryMaxAggregate } from './category-max-aggregate.output';
export declare class CategoryGroupBy {
    id: string;
    name: string;
    description?: string;
    _count?: CategoryCountAggregate;
    _min?: CategoryMinAggregate;
    _max?: CategoryMaxAggregate;
}
