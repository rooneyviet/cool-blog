import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesOnPostsCreateWithoutPostInput } from './categories-on-posts-create-without-post.input';
import { Type } from 'class-transformer';
import { CategoriesOnPostsCreateOrConnectWithoutPostInput } from './categories-on-posts-create-or-connect-without-post.input';
import { CategoriesOnPostsCreateManyPostInputEnvelope } from './categories-on-posts-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';

@InputType()
export class CategoriesOnPostsCreateNestedManyWithoutPostInput {

    @Field(() => [CategoriesOnPostsCreateWithoutPostInput], {nullable:true})
    @Type(() => CategoriesOnPostsCreateWithoutPostInput)
    create?: Array<CategoriesOnPostsCreateWithoutPostInput>;

    @Field(() => [CategoriesOnPostsCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => CategoriesOnPostsCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<CategoriesOnPostsCreateOrConnectWithoutPostInput>;

    @Field(() => CategoriesOnPostsCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => CategoriesOnPostsCreateManyPostInputEnvelope)
    createMany?: CategoriesOnPostsCreateManyPostInputEnvelope;

    @Field(() => [CategoriesOnPostsWhereUniqueInput], {nullable:true})
    @Type(() => CategoriesOnPostsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>>;
}
