import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutCategoriesInput } from '../post/post-create-nested-one-without-categories.input';
import { CategoryCreateNestedOneWithoutPostsInput } from '../category/category-create-nested-one-without-posts.input';

@InputType()
export class CategoriesOnPostsCreateInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => PostCreateNestedOneWithoutCategoriesInput, {nullable:false})
    post!: PostCreateNestedOneWithoutCategoriesInput;

    @Field(() => CategoryCreateNestedOneWithoutPostsInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutPostsInput;
}
