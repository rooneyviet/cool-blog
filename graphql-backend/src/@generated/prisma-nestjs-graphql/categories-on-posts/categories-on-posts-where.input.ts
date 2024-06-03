import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';

@InputType()
export class CategoriesOnPostsWhereInput {

    @Field(() => [CategoriesOnPostsWhereInput], {nullable:true})
    AND?: Array<CategoriesOnPostsWhereInput>;

    @Field(() => [CategoriesOnPostsWhereInput], {nullable:true})
    OR?: Array<CategoriesOnPostsWhereInput>;

    @Field(() => [CategoriesOnPostsWhereInput], {nullable:true})
    NOT?: Array<CategoriesOnPostsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    postId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;

    @Field(() => PostRelationFilter, {nullable:true})
    post?: PostRelationFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: CategoryRelationFilter;
}
