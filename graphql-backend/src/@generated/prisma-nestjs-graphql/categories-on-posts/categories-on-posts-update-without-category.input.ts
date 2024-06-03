import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUpdateOneRequiredWithoutCategoriesNestedInput } from '../post/post-update-one-required-without-categories-nested.input';

@InputType()
export class CategoriesOnPostsUpdateWithoutCategoryInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    assignedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    assignedBy?: StringFieldUpdateOperationsInput;

    @Field(() => PostUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutCategoriesNestedInput;
}
