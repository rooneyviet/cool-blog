import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUpdateOneRequiredWithoutCategoriesNestedInput } from '../post/post-update-one-required-without-categories-nested.input';
import { CategoryUpdateOneRequiredWithoutPostsNestedInput } from '../category/category-update-one-required-without-posts-nested.input';
export declare class CategoriesOnPostsUpdateInput {
    assignedAt?: DateTimeFieldUpdateOperationsInput;
    assignedBy?: StringFieldUpdateOperationsInput;
    post?: PostUpdateOneRequiredWithoutCategoriesNestedInput;
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput;
}
