import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CategoriesOnPostsScalarWhereWithAggregatesInput {

    @Field(() => [CategoriesOnPostsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CategoriesOnPostsScalarWhereWithAggregatesInput>;

    @Field(() => [CategoriesOnPostsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CategoriesOnPostsScalarWhereWithAggregatesInput>;

    @Field(() => [CategoriesOnPostsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CategoriesOnPostsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    postId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categoryId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    assignedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    assignedBy?: StringWithAggregatesFilter;
}
