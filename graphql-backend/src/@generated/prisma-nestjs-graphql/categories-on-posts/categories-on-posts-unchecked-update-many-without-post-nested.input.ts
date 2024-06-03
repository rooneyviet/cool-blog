import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesOnPostsCreateWithoutPostInput } from './categories-on-posts-create-without-post.input';
import { Type } from 'class-transformer';
import { CategoriesOnPostsCreateOrConnectWithoutPostInput } from './categories-on-posts-create-or-connect-without-post.input';
import { CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput } from './categories-on-posts-upsert-with-where-unique-without-post.input';
import { CategoriesOnPostsCreateManyPostInputEnvelope } from './categories-on-posts-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput } from './categories-on-posts-update-with-where-unique-without-post.input';
import { CategoriesOnPostsUpdateManyWithWhereWithoutPostInput } from './categories-on-posts-update-many-with-where-without-post.input';
import { CategoriesOnPostsScalarWhereInput } from './categories-on-posts-scalar-where.input';

@InputType()
export class CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput {

    @Field(() => [CategoriesOnPostsCreateWithoutPostInput], {nullable:true})
    @Type(() => CategoriesOnPostsCreateWithoutPostInput)
    create?: Array<CategoriesOnPostsCreateWithoutPostInput>;

    @Field(() => [CategoriesOnPostsCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => CategoriesOnPostsCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<CategoriesOnPostsCreateOrConnectWithoutPostInput>;

    @Field(() => [CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput)
    upsert?: Array<CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput>;

    @Field(() => CategoriesOnPostsCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => CategoriesOnPostsCreateManyPostInputEnvelope)
    createMany?: CategoriesOnPostsCreateManyPostInputEnvelope;

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

    @Field(() => [CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput)
    update?: Array<CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput>;

    @Field(() => [CategoriesOnPostsUpdateManyWithWhereWithoutPostInput], {nullable:true})
    @Type(() => CategoriesOnPostsUpdateManyWithWhereWithoutPostInput)
    updateMany?: Array<CategoriesOnPostsUpdateManyWithWhereWithoutPostInput>;

    @Field(() => [CategoriesOnPostsScalarWhereInput], {nullable:true})
    @Type(() => CategoriesOnPostsScalarWhereInput)
    deleteMany?: Array<CategoriesOnPostsScalarWhereInput>;
}
