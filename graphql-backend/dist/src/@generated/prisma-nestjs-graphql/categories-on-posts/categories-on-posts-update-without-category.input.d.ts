import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUpdateOneRequiredWithoutCategoriesNestedInput } from '../post/post-update-one-required-without-categories-nested.input';
export declare class CategoriesOnPostsUpdateWithoutCategoryInput {
    assignedAt?: DateTimeFieldUpdateOperationsInput;
    assignedBy?: StringFieldUpdateOperationsInput;
    post?: PostUpdateOneRequiredWithoutCategoriesNestedInput;
}
