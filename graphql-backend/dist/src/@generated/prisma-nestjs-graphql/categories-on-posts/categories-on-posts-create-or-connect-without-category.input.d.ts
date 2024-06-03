import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsCreateWithoutCategoryInput } from './categories-on-posts-create-without-category.input';
export declare class CategoriesOnPostsCreateOrConnectWithoutCategoryInput {
    where: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
    create: CategoriesOnPostsCreateWithoutCategoryInput;
}
