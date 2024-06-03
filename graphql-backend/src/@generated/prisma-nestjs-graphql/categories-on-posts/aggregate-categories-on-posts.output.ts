import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CategoriesOnPostsCountAggregate } from './categories-on-posts-count-aggregate.output';
import { CategoriesOnPostsMinAggregate } from './categories-on-posts-min-aggregate.output';
import { CategoriesOnPostsMaxAggregate } from './categories-on-posts-max-aggregate.output';

@ObjectType()
export class AggregateCategoriesOnPosts {

    @Field(() => CategoriesOnPostsCountAggregate, {nullable:true})
    _count?: CategoriesOnPostsCountAggregate;

    @Field(() => CategoriesOnPostsMinAggregate, {nullable:true})
    _min?: CategoriesOnPostsMinAggregate;

    @Field(() => CategoriesOnPostsMaxAggregate, {nullable:true})
    _max?: CategoriesOnPostsMaxAggregate;
}
