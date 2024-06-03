import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutPostsInput } from './category-update-without-posts.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { CategoryWhereInput } from './category-where.input';

@InputType()
export class CategoryUpsertWithoutPostsInput {

    @Field(() => CategoryUpdateWithoutPostsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutPostsInput)
    update!: CategoryUpdateWithoutPostsInput;

    @Field(() => CategoryCreateWithoutPostsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutPostsInput)
    create!: CategoryCreateWithoutPostsInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;
}
