import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutLikesNestedInput } from '../user/user-update-one-required-without-likes-nested.input';
import { PostUpdateOneRequiredWithoutLikesNestedInput } from '../post/post-update-one-required-without-likes-nested.input';
export declare class LikeUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    user?: UserUpdateOneRequiredWithoutLikesNestedInput;
    post?: PostUpdateOneRequiredWithoutLikesNestedInput;
}
