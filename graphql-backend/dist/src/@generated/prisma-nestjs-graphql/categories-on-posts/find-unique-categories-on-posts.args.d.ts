import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
export declare class FindUniqueCategoriesOnPostsArgs {
    where: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
}
