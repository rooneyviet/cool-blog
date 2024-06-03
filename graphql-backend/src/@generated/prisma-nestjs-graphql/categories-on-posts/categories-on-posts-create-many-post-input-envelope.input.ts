import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesOnPostsCreateManyPostInput } from './categories-on-posts-create-many-post.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoriesOnPostsCreateManyPostInputEnvelope {

    @Field(() => [CategoriesOnPostsCreateManyPostInput], {nullable:false})
    @Type(() => CategoriesOnPostsCreateManyPostInput)
    data!: Array<CategoriesOnPostsCreateManyPostInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
