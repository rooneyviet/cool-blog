import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesOnPostsCreateNestedManyWithoutCategoryInput } from '../categories-on-posts/categories-on-posts-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => CategoriesOnPostsCreateNestedManyWithoutCategoryInput, {nullable:true})
    posts?: CategoriesOnPostsCreateNestedManyWithoutCategoryInput;
}
