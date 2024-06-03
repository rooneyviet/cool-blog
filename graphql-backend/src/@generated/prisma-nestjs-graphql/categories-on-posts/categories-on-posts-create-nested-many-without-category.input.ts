import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesOnPostsCreateWithoutCategoryInput } from './categories-on-posts-create-without-category.input';
import { Type } from 'class-transformer';
import { CategoriesOnPostsCreateOrConnectWithoutCategoryInput } from './categories-on-posts-create-or-connect-without-category.input';
import { CategoriesOnPostsCreateManyCategoryInputEnvelope } from './categories-on-posts-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';

@InputType()
export class CategoriesOnPostsCreateNestedManyWithoutCategoryInput {

    @Field(() => [CategoriesOnPostsCreateWithoutCategoryInput], {nullable:true})
    @Type(() => CategoriesOnPostsCreateWithoutCategoryInput)
    create?: Array<CategoriesOnPostsCreateWithoutCategoryInput>;

    @Field(() => [CategoriesOnPostsCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => CategoriesOnPostsCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<CategoriesOnPostsCreateOrConnectWithoutCategoryInput>;

    @Field(() => CategoriesOnPostsCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => CategoriesOnPostsCreateManyCategoryInputEnvelope)
    createMany?: CategoriesOnPostsCreateManyCategoryInputEnvelope;

    @Field(() => [CategoriesOnPostsWhereUniqueInput], {nullable:true})
    @Type(() => CategoriesOnPostsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;
}
