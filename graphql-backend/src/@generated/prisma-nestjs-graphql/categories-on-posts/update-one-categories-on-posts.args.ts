import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesOnPostsUpdateInput } from './categories-on-posts-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';

@ArgsType()
export class UpdateOneCategoriesOnPostsArgs {

    @Field(() => CategoriesOnPostsUpdateInput, {nullable:false})
    @Type(() => CategoriesOnPostsUpdateInput)
    data!: CategoriesOnPostsUpdateInput;

    @Field(() => CategoriesOnPostsWhereUniqueInput, {nullable:false})
    @Type(() => CategoriesOnPostsWhereUniqueInput)
    where!: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
}
