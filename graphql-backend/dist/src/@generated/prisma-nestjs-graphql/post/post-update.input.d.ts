import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateOneWithoutPostsNestedInput } from '../user/user-update-one-without-posts-nested.input';
import { CategoriesOnPostsUpdateManyWithoutPostNestedInput } from '../categories-on-posts/categories-on-posts-update-many-without-post-nested.input';
import { LikeUpdateManyWithoutPostNestedInput } from '../like/like-update-many-without-post-nested.input';
import { CommentUpdateManyWithoutPostNestedInput } from '../comment/comment-update-many-without-post-nested.input';
export declare class PostUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    url?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    views?: IntFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    published?: BoolFieldUpdateOperationsInput;
    title?: StringFieldUpdateOperationsInput;
    content?: NullableStringFieldUpdateOperationsInput;
    author?: UserUpdateOneWithoutPostsNestedInput;
    categories?: CategoriesOnPostsUpdateManyWithoutPostNestedInput;
    likes?: LikeUpdateManyWithoutPostNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
}
