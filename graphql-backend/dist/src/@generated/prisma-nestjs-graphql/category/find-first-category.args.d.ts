import { CategoryWhereInput } from './category-where.input';
import { CategoryOrderByWithRelationInput } from './category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryScalarFieldEnum } from './category-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstCategoryArgs {
    where?: CategoryWhereInput;
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
