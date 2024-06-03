import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesOnPostsUncheckedCreateNestedManyWithoutCategoryInput } from '../categories-on-posts/categories-on-posts-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => CategoriesOnPostsUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    posts?: CategoriesOnPostsUncheckedCreateNestedManyWithoutCategoryInput;
}
