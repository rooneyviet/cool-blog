import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryCreateInput } from './category-create.input';
import { CategoryUpdateInput } from './category-update.input';
export declare class UpsertOneCategoryArgs {
    where: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    create: CategoryCreateInput;
    update: CategoryUpdateInput;
}
