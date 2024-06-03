import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsUpdateWithoutCategoryInput } from './categories-on-posts-update-without-category.input';
export declare class CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput {
    where: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
    data: CategoriesOnPostsUpdateWithoutCategoryInput;
}
