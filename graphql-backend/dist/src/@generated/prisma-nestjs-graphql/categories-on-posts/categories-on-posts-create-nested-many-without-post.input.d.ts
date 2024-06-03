import { CategoriesOnPostsCreateWithoutPostInput } from './categories-on-posts-create-without-post.input';
import { CategoriesOnPostsCreateOrConnectWithoutPostInput } from './categories-on-posts-create-or-connect-without-post.input';
import { CategoriesOnPostsCreateManyPostInputEnvelope } from './categories-on-posts-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
export declare class CategoriesOnPostsCreateNestedManyWithoutPostInput {
    create?: Array<CategoriesOnPostsCreateWithoutPostInput>;
    connectOrCreate?: Array<CategoriesOnPostsCreateOrConnectWithoutPostInput>;
    createMany?: CategoriesOnPostsCreateManyPostInputEnvelope;
    connect?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;
}
