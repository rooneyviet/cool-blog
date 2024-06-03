import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
export declare class FindUniqueCategoryArgs {
    where: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}
