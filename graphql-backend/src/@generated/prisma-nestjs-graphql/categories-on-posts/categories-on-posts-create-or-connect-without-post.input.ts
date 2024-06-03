import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { Type } from 'class-transformer';
import { CategoriesOnPostsCreateWithoutPostInput } from './categories-on-posts-create-without-post.input';

@InputType()
export class CategoriesOnPostsCreateOrConnectWithoutPostInput {

    @Field(() => CategoriesOnPostsWhereUniqueInput, {nullable:false})
    @Type(() => CategoriesOnPostsWhereUniqueInput)
    where!: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;

    @Field(() => CategoriesOnPostsCreateWithoutPostInput, {nullable:false})
    @Type(() => CategoriesOnPostsCreateWithoutPostInput)
    create!: CategoriesOnPostsCreateWithoutPostInput;
}
