import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryCreateInput } from './category-create.input';
import { CategoryUpdateInput } from './category-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneCategoryArgs {
    where: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    create: CategoryCreateInput;
    update: CategoryUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
