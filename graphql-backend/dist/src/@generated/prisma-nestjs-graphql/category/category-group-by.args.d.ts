import { CategoryWhereInput } from './category-where.input';
import { CategoryOrderByWithAggregationInput } from './category-order-by-with-aggregation.input';
import { CategoryScalarFieldEnum } from './category-scalar-field.enum';
import { CategoryScalarWhereWithAggregatesInput } from './category-scalar-where-with-aggregates.input';
import { CategoryCountAggregateInput } from './category-count-aggregate.input';
import { CategoryMinAggregateInput } from './category-min-aggregate.input';
import { CategoryMaxAggregateInput } from './category-max-aggregate.input';
export declare class CategoryGroupByArgs {
    where?: CategoryWhereInput;
    orderBy?: Array<CategoryOrderByWithAggregationInput>;
    by: Array<keyof typeof CategoryScalarFieldEnum>;
    having?: CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInput;
    _min?: CategoryMinAggregateInput;
    _max?: CategoryMaxAggregateInput;
}
