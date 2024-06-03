import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsUpdateWithoutCategoryInput } from './categories-on-posts-update-without-category.input';
import { CategoriesOnPostsCreateWithoutCategoryInput } from './categories-on-posts-create-without-category.input';
export declare class CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput {
    where: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
    update: CategoriesOnPostsUpdateWithoutCategoryInput;
    create: CategoriesOnPostsCreateWithoutCategoryInput;
}
