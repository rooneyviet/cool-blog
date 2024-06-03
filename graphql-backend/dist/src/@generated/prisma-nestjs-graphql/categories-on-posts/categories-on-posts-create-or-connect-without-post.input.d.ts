import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsCreateWithoutPostInput } from './categories-on-posts-create-without-post.input';
export declare class CategoriesOnPostsCreateOrConnectWithoutPostInput {
    where: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
    create: CategoriesOnPostsCreateWithoutPostInput;
}
