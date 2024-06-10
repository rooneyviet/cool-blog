import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneWithoutPostsNestedInput } from '../user/user-update-one-without-posts-nested.input';
import { LikeUpdateManyWithoutPostNestedInput } from '../like/like-update-many-without-post-nested.input';
import { CommentUpdateManyWithoutPostNestedInput } from '../comment/comment-update-many-without-post-nested.input';
export declare class PostUpdateWithoutCategoriesInput {
    id?: StringFieldUpdateOperationsInput;
    url?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    views?: IntFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    published?: BoolFieldUpdateOperationsInput;
    title?: StringFieldUpdateOperationsInput;
    content?: StringFieldUpdateOperationsInput;
    author?: UserUpdateOneWithoutPostsNestedInput;
    likes?: LikeUpdateManyWithoutPostNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
}
