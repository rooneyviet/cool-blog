import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutCategoriesInput } from './post-create-or-connect-without-categories.input';
import { PostUpsertWithoutCategoriesInput } from './post-upsert-without-categories.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateToOneWithWhereWithoutCategoriesInput } from './post-update-to-one-with-where-without-categories.input';

@InputType()
export class PostUpdateOneRequiredWithoutCategoriesNestedInput {

    @Field(() => PostCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => PostCreateWithoutCategoriesInput)
    create?: PostCreateWithoutCategoriesInput;

    @Field(() => PostCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput;

    @Field(() => PostUpsertWithoutCategoriesInput, {nullable:true})
    @Type(() => PostUpsertWithoutCategoriesInput)
    upsert?: PostUpsertWithoutCategoriesInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;

    @Field(() => PostUpdateToOneWithWhereWithoutCategoriesInput, {nullable:true})
    @Type(() => PostUpdateToOneWithWhereWithoutCategoriesInput)
    update?: PostUpdateToOneWithWhereWithoutCategoriesInput;
}
