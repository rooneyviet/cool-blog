import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CategoriesOnPostsCountAggregate } from './categories-on-posts-count-aggregate.output';
import { CategoriesOnPostsMinAggregate } from './categories-on-posts-min-aggregate.output';
import { CategoriesOnPostsMaxAggregate } from './categories-on-posts-max-aggregate.output';

@ObjectType()
export class CategoriesOnPostsGroupBy {

    @Field(() => String, {nullable:false})
    postId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Date, {nullable:false})
    assignedAt!: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => CategoriesOnPostsCountAggregate, {nullable:true})
    _count?: CategoriesOnPostsCountAggregate;

    @Field(() => CategoriesOnPostsMinAggregate, {nullable:true})
    _min?: CategoriesOnPostsMinAggregate;

    @Field(() => CategoriesOnPostsMaxAggregate, {nullable:true})
    _max?: CategoriesOnPostsMaxAggregate;
}
