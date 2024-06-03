import { CategoriesOnPostsCreateWithoutCategoryInput } from './categories-on-posts-create-without-category.input';
import { CategoriesOnPostsCreateOrConnectWithoutCategoryInput } from './categories-on-posts-create-or-connect-without-category.input';
import { CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput } from './categories-on-posts-upsert-with-where-unique-without-category.input';
import { CategoriesOnPostsCreateManyCategoryInputEnvelope } from './categories-on-posts-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput } from './categories-on-posts-update-with-where-unique-without-category.input';
import { CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput } from './categories-on-posts-update-many-with-where-without-category.input';
import { CategoriesOnPostsScalarWhereInput } from './categories-on-posts-scalar-where.input';
export declare class CategoriesOnPostsUpdateManyWithoutCategoryNestedInput {
    create?: Array<CategoriesOnPostsCreateWithoutCategoryInput>;
    connectOrCreate?: Array<CategoriesOnPostsCreateOrConnectWithoutCategoryInput>;
    upsert?: Array<CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput>;
    createMany?: CategoriesOnPostsCreateManyCategoryInputEnvelope;
    set?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;
    disconnect?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;
    delete?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;
    connect?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;
    update?: Array<CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput>;
    updateMany?: Array<CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput>;
    deleteMany?: Array<CategoriesOnPostsScalarWhereInput>;
}
