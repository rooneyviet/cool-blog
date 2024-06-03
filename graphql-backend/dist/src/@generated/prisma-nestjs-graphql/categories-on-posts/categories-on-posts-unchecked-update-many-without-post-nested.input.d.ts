import { CategoriesOnPostsCreateWithoutPostInput } from './categories-on-posts-create-without-post.input';
import { CategoriesOnPostsCreateOrConnectWithoutPostInput } from './categories-on-posts-create-or-connect-without-post.input';
import { CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput } from './categories-on-posts-upsert-with-where-unique-without-post.input';
import { CategoriesOnPostsCreateManyPostInputEnvelope } from './categories-on-posts-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput } from './categories-on-posts-update-with-where-unique-without-post.input';
import { CategoriesOnPostsUpdateManyWithWhereWithoutPostInput } from './categories-on-posts-update-many-with-where-without-post.input';
import { CategoriesOnPostsScalarWhereInput } from './categories-on-posts-scalar-where.input';
export declare class CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput {
    create?: Array<CategoriesOnPostsCreateWithoutPostInput>;
    connectOrCreate?: Array<CategoriesOnPostsCreateOrConnectWithoutPostInput>;
    upsert?: Array<CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput>;
    createMany?: CategoriesOnPostsCreateManyPostInputEnvelope;
    set?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;
    disconnect?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;
    delete?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;
    connect?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;
    update?: Array<CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput>;
    updateMany?: Array<CategoriesOnPostsUpdateManyWithWhereWithoutPostInput>;
    deleteMany?: Array<CategoriesOnPostsScalarWhereInput>;
}
