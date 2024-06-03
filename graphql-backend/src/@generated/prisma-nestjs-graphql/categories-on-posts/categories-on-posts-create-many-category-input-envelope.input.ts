import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesOnPostsCreateManyCategoryInput } from './categories-on-posts-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoriesOnPostsCreateManyCategoryInputEnvelope {

    @Field(() => [CategoriesOnPostsCreateManyCategoryInput], {nullable:false})
    @Type(() => CategoriesOnPostsCreateManyCategoryInput)
    data!: Array<CategoriesOnPostsCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
