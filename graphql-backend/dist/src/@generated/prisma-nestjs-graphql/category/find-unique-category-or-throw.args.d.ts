import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
export declare class FindUniqueCategoryOrThrowArgs {
    where: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}
