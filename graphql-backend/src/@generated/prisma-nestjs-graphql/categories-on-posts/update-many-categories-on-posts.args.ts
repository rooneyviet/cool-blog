import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesOnPostsUpdateManyMutationInput } from './categories-on-posts-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CategoriesOnPostsWhereInput } from './categories-on-posts-where.input';

@ArgsType()
export class UpdateManyCategoriesOnPostsArgs {

    @Field(() => CategoriesOnPostsUpdateManyMutationInput, {nullable:false})
    @Type(() => CategoriesOnPostsUpdateManyMutationInput)
    data!: CategoriesOnPostsUpdateManyMutationInput;

    @Field(() => CategoriesOnPostsWhereInput, {nullable:true})
    @Type(() => CategoriesOnPostsWhereInput)
    where?: CategoriesOnPostsWhereInput;
}
