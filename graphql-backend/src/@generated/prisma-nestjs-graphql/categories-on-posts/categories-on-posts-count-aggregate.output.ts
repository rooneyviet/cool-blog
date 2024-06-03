import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CategoriesOnPostsCountAggregate {

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => Int, {nullable:false})
    assignedAt!: number;

    @Field(() => Int, {nullable:false})
    assignedBy!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
