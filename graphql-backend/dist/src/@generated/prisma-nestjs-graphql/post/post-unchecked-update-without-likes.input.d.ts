import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput } from '../categories-on-posts/categories-on-posts-unchecked-update-many-without-post-nested.input';
import { CommentUncheckedUpdateManyWithoutPostNestedInput } from '../comment/comment-unchecked-update-many-without-post-nested.input';
export declare class PostUncheckedUpdateWithoutLikesInput {
    id?: StringFieldUpdateOperationsInput;
    url?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    views?: IntFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    published?: BoolFieldUpdateOperationsInput;
    title?: StringFieldUpdateOperationsInput;
    content?: NullableStringFieldUpdateOperationsInput;
    authorId?: NullableStringFieldUpdateOperationsInput;
    categories?: CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
}
