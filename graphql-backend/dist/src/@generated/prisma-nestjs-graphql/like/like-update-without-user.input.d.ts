import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PostUpdateOneRequiredWithoutLikesNestedInput } from '../post/post-update-one-required-without-likes-nested.input';
export declare class LikeUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    post?: PostUpdateOneRequiredWithoutLikesNestedInput;
}
