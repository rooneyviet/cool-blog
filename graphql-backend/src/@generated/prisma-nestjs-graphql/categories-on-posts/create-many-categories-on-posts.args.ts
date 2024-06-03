import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesOnPostsCreateManyInput } from './categories-on-posts-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCategoriesOnPostsArgs {

    @Field(() => [CategoriesOnPostsCreateManyInput], {nullable:false})
    @Type(() => CategoriesOnPostsCreateManyInput)
    data!: Array<CategoriesOnPostsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
