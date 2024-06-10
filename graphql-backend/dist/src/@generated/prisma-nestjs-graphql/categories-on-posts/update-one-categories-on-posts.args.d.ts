import { CategoriesOnPostsUpdateInput } from './categories-on-posts-update.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneCategoriesOnPostsArgs {
    data: CategoriesOnPostsUpdateInput;
    where: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
