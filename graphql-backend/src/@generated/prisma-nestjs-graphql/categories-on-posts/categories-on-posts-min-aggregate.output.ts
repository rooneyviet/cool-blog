import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CategoriesOnPostsMinAggregate {

    @Field(() => String, {nullable:true})
    postId?: string;

    @Field(() => String, {nullable:true})
    categoryId?: string;

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:true})
    assignedBy?: string;
}
