import { CategoryWhereInput } from './category-where.input';
import { CategoryOrderByWithRelationInput } from './category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryScalarFieldEnum } from './category-scalar-field.enum';
export declare class FindFirstCategoryOrThrowArgs {
    where?: CategoryWhereInput;
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}
