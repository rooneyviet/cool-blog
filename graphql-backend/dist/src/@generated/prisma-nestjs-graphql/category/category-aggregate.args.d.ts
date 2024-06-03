import { CategoryWhereInput } from './category-where.input';
import { CategoryOrderByWithRelationInput } from './category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryCountAggregateInput } from './category-count-aggregate.input';
import { CategoryMinAggregateInput } from './category-min-aggregate.input';
import { CategoryMaxAggregateInput } from './category-max-aggregate.input';
export declare class CategoryAggregateArgs {
    where?: CategoryWhereInput;
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInput;
    _min?: CategoryMinAggregateInput;
    _max?: CategoryMaxAggregateInput;
}
