import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
export declare class PostUncheckedUpdateManyInput {
    id?: StringFieldUpdateOperationsInput;
    url?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    views?: IntFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    published?: BoolFieldUpdateOperationsInput;
    title?: StringFieldUpdateOperationsInput;
    content?: StringFieldUpdateOperationsInput;
    authorId?: NullableStringFieldUpdateOperationsInput;
}
