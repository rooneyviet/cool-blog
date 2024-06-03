import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutCategoriesInput } from '../post/post-create-nested-one-without-categories.input';

@InputType()
export class CategoriesOnPostsCreateWithoutCategoryInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => PostCreateNestedOneWithoutCategoriesInput, {nullable:false})
    post!: PostCreateNestedOneWithoutCategoriesInput;
}
