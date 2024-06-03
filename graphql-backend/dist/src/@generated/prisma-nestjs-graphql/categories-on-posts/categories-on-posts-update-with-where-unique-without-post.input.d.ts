import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsUpdateWithoutPostInput } from './categories-on-posts-update-without-post.input';
export declare class CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput {
    where: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
    data: CategoriesOnPostsUpdateWithoutPostInput;
}
