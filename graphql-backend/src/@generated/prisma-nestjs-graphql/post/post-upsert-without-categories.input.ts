import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateWithoutCategoriesInput } from './post-update-without-categories.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { PostWhereInput } from './post-where.input';

@InputType()
export class PostUpsertWithoutCategoriesInput {

    @Field(() => PostUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => PostUpdateWithoutCategoriesInput)
    update!: PostUpdateWithoutCategoriesInput;

    @Field(() => PostCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => PostCreateWithoutCategoriesInput)
    create!: PostCreateWithoutCategoriesInput;

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;
}
