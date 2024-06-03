import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUpdateOneRequiredWithoutCategoriesNestedInput } from '../post/post-update-one-required-without-categories-nested.input';
import { CategoryUpdateOneRequiredWithoutPostsNestedInput } from '../category/category-update-one-required-without-posts-nested.input';

@InputType()
export class CategoriesOnPostsUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    assignedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    assignedBy?: StringFieldUpdateOperationsInput;

    @Field(() => PostUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutCategoriesNestedInput;

    @Field(() => CategoryUpdateOneRequiredWithoutPostsNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput;
}
