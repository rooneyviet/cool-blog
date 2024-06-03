import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutCategoriesInput } from './post-create-or-connect-without-categories.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedOneWithoutCategoriesInput {

    @Field(() => PostCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => PostCreateWithoutCategoriesInput)
    create?: PostCreateWithoutCategoriesInput;

    @Field(() => PostCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
}
