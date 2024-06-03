import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CategoriesOnPostsUncheckedUpdateManyWithoutCategoryNestedInput } from '../categories-on-posts/categories-on-posts-unchecked-update-many-without-category-nested.input';

@InputType()
export class CategoryUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CategoriesOnPostsUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    posts?: CategoriesOnPostsUncheckedUpdateManyWithoutCategoryNestedInput;
}
