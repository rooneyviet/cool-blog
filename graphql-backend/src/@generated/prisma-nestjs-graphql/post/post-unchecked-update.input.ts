import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput } from '../categories-on-posts/categories-on-posts-unchecked-update-many-without-post-nested.input';
import { LikeUncheckedUpdateManyWithoutPostNestedInput } from '../like/like-unchecked-update-many-without-post-nested.input';
import { CommentUncheckedUpdateManyWithoutPostNestedInput } from '../comment/comment-unchecked-update-many-without-post-nested.input';

@InputType()
export class PostUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    url?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    views?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput, {nullable:true})
    categories?: CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput;

    @Field(() => LikeUncheckedUpdateManyWithoutPostNestedInput, {nullable:true})
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutPostNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
}
