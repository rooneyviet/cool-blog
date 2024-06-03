import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutPostsInput } from '../category/category-create-nested-one-without-posts.input';

@InputType()
export class CategoriesOnPostsCreateWithoutPostInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => CategoryCreateNestedOneWithoutPostsInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutPostsInput;
}
