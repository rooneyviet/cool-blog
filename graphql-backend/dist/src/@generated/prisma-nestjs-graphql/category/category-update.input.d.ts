import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CategoriesOnPostsUpdateManyWithoutCategoryNestedInput } from '../categories-on-posts/categories-on-posts-update-many-without-category-nested.input';
export declare class CategoryUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    description?: NullableStringFieldUpdateOperationsInput;
    posts?: CategoriesOnPostsUpdateManyWithoutCategoryNestedInput;
}
