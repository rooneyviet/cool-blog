import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { Type } from 'class-transformer';
import { CategoriesOnPostsUpdateWithoutCategoryInput } from './categories-on-posts-update-without-category.input';
import { CategoriesOnPostsCreateWithoutCategoryInput } from './categories-on-posts-create-without-category.input';

@InputType()
export class CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => CategoriesOnPostsWhereUniqueInput, {nullable:false})
    @Type(() => CategoriesOnPostsWhereUniqueInput)
    where!: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;

    @Field(() => CategoriesOnPostsUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => CategoriesOnPostsUpdateWithoutCategoryInput)
    update!: CategoriesOnPostsUpdateWithoutCategoryInput;

    @Field(() => CategoriesOnPostsCreateWithoutCategoryInput, {nullable:false})
    @Type(() => CategoriesOnPostsCreateWithoutCategoryInput)
    create!: CategoriesOnPostsCreateWithoutCategoryInput;
}
