import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CategoriesOnPostsUncheckedUpdateManyWithoutCategoryNestedInput } from '../categories-on-posts/categories-on-posts-unchecked-update-many-without-category-nested.input';
export declare class CategoryUncheckedUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    description?: NullableStringFieldUpdateOperationsInput;
    posts?: CategoriesOnPostsUncheckedUpdateManyWithoutCategoryNestedInput;
}
