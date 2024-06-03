import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesOnPostsPostIdCategoryIdCompoundUniqueInput } from './categories-on-posts-post-id-category-id-compound-unique.input';
import { CategoriesOnPostsWhereInput } from './categories-on-posts-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';

@InputType()
export class CategoriesOnPostsWhereUniqueInput {

    @Field(() => CategoriesOnPostsPostIdCategoryIdCompoundUniqueInput, {nullable:true})
    postId_categoryId?: CategoriesOnPostsPostIdCategoryIdCompoundUniqueInput;

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
