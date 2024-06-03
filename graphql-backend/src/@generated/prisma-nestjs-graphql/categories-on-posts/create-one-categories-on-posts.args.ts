import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesOnPostsCreateInput } from './categories-on-posts-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneCategoriesOnPostsArgs {

    @Field(() => CategoriesOnPostsCreateInput, {nullable:false})
    @Type(() => CategoriesOnPostsCreateInput)
    @ValidateNested()
    @Type(() => CategoriesOnPostsCreateInput)
    data!: CategoriesOnPostsCreateInput;
}
