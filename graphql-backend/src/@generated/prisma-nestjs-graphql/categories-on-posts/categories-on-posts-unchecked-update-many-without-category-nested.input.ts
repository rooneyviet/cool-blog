import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesOnPostsCreateWithoutCategoryInput } from './categories-on-posts-create-without-category.input';
import { Type } from 'class-transformer';
import { CategoriesOnPostsCreateOrConnectWithoutCategoryInput } from './categories-on-posts-create-or-connect-without-category.input';
import { CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput } from './categories-on-posts-upsert-with-where-unique-without-category.input';
import { CategoriesOnPostsCreateManyCategoryInputEnvelope } from './categories-on-posts-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput } from './categories-on-posts-update-with-where-unique-without-category.input';
import { CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput } from './categories-on-posts-update-many-with-where-without-category.input';
import { CategoriesOnPostsScalarWhereInput } from './categories-on-posts-scalar-where.input';

@InputType()
export class CategoriesOnPostsUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [CategoriesOnPostsCreateWithoutCategoryInput], {nullable:true})
    @Type(() => CategoriesOnPostsCreateWithoutCategoryInput)
    create?: Array<CategoriesOnPostsCreateWithoutCategoryInput>;

    @Field(() => [CategoriesOnPostsCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => CategoriesOnPostsCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<CategoriesOnPostsCreateOrConnectWithoutCategoryInput>;

    @Field(() => [CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => CategoriesOnPostsCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => CategoriesOnPostsCreateManyCategoryInputEnvelope)
    createMany?: CategoriesOnPostsCreateManyCategoryInputEnvelope;

    @Field(() => [CategoriesOnPostsWhereUniqueInput], {nullable:true})
    @Type(() => CategoriesOnPostsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;

    @Field(() => [CategoriesOnPostsWhereUniqueInput], {nullable:true})
    @Type(() => CategoriesOnPostsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;

    @Field(() => [CategoriesOnPostsWhereUniqueInput], {nullable:true})
    @Type(() => CategoriesOnPostsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;

    @Field(() => [CategoriesOnPostsWhereUniqueInput], {nullable:true})
    @Type(() => CategoriesOnPostsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;

    @Field(() => [CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [CategoriesOnPostsScalarWhereInput], {nullable:true})
    @Type(() => CategoriesOnPostsScalarWhereInput)
    deleteMany?: Array<CategoriesOnPostsScalarWhereInput>;
}
