import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsCreateInput } from './categories-on-posts-create.input';
import { CategoriesOnPostsUpdateInput } from './categories-on-posts-update.input';
export declare class UpsertOneCategoriesOnPostsArgs {
    where: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
    create: CategoriesOnPostsCreateInput;
    update: CategoriesOnPostsUpdateInput;
}
