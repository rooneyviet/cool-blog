import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CategoriesOnPostsPostIdCategoryIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    postId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;
}
