import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CategoriesOnPostsScalarWhereInput {

    @Field(() => [CategoriesOnPostsScalarWhereInput], {nullable:true})
    AND?: Array<CategoriesOnPostsScalarWhereInput>;

    @Field(() => [CategoriesOnPostsScalarWhereInput], {nullable:true})
    OR?: Array<CategoriesOnPostsScalarWhereInput>;

    @Field(() => [CategoriesOnPostsScalarWhereInput], {nullable:true})
    NOT?: Array<CategoriesOnPostsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    postId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;
}
