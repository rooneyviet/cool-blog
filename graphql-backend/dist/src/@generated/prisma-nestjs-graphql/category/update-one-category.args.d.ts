import { CategoryUpdateInput } from './category-update.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
export declare class UpdateOneCategoryArgs {
    data: CategoryUpdateInput;
    where: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}
