import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneWithoutPostsNestedInput } from '../user/user-update-one-without-posts-nested.input';
import { LikeUpdateManyWithoutPostNestedInput } from '../like/like-update-many-without-post-nested.input';
import { CommentUpdateManyWithoutPostNestedInput } from '../comment/comment-update-many-without-post-nested.input';

@InputType()
export class PostUpdateWithoutCategoriesInput {

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

    @Field(() => UserUpdateOneWithoutPostsNestedInput, {nullable:true})
    author?: UserUpdateOneWithoutPostsNestedInput;

    @Field(() => LikeUpdateManyWithoutPostNestedInput, {nullable:true})
    likes?: LikeUpdateManyWithoutPostNestedInput;

    @Field(() => CommentUpdateManyWithoutPostNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutPostNestedInput;
}