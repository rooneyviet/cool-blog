import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
export declare class DeleteOneCategoryArgs {
    where: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}
