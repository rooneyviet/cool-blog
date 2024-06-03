import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class CategoriesOnPostsUncheckedUpdateManyInput {
    postId?: StringFieldUpdateOperationsInput;
    categoryId?: StringFieldUpdateOperationsInput;
    assignedAt?: DateTimeFieldUpdateOperationsInput;
    assignedBy?: StringFieldUpdateOperationsInput;
}
