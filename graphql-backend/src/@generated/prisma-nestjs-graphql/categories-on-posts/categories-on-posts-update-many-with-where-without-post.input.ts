import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesOnPostsScalarWhereInput } from './categories-on-posts-scalar-where.input';
import { Type } from 'class-transformer';
import { CategoriesOnPostsUpdateManyMutationInput } from './categories-on-posts-update-many-mutation.input';

@InputType()
export class CategoriesOnPostsUpdateManyWithWhereWithoutPostInput {

    @Field(() => CategoriesOnPostsScalarWhereInput, {nullable:false})
    @Type(() => CategoriesOnPostsScalarWhereInput)
    where!: CategoriesOnPostsScalarWhereInput;

    @Field(() => CategoriesOnPostsUpdateManyMutationInput, {nullable:false})
    @Type(() => CategoriesOnPostsUpdateManyMutationInput)
    data!: CategoriesOnPostsUpdateManyMutationInput;
}
