import { CategoriesOnPostsCreateWithoutCategoryInput } from './categories-on-posts-create-without-category.input';
import { CategoriesOnPostsCreateOrConnectWithoutCategoryInput } from './categories-on-posts-create-or-connect-without-category.input';
import { CategoriesOnPostsCreateManyCategoryInputEnvelope } from './categories-on-posts-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
export declare class CategoriesOnPostsCreateNestedManyWithoutCategoryInput {
    create?: Array<CategoriesOnPostsCreateWithoutCategoryInput>;
    connectOrCreate?: Array<CategoriesOnPostsCreateOrConnectWithoutCategoryInput>;
    createMany?: CategoriesOnPostsCreateManyCategoryInputEnvelope;
    connect?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;
}
