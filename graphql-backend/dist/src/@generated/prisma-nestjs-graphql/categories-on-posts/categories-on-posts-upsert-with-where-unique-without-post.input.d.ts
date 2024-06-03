import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsUpdateWithoutPostInput } from './categories-on-posts-update-without-post.input';
import { CategoriesOnPostsCreateWithoutPostInput } from './categories-on-posts-create-without-post.input';
export declare class CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput {
    where: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
    update: CategoriesOnPostsUpdateWithoutPostInput;
    create: CategoriesOnPostsCreateWithoutPostInput;
}
