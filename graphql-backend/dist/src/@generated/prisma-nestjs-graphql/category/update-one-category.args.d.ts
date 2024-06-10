import { CategoryUpdateInput } from './category-update.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneCategoryArgs {
    data: CategoryUpdateInput;
    where: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
