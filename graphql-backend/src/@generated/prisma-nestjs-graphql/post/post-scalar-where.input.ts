import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class PostScalarWhereInput {

    @Field(() => [PostScalarWhereInput], {nullable:true})
    AND?: Array<PostScalarWhereInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    OR?: Array<PostScalarWhereInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    NOT?: Array<PostScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    views?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    published?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: StringNullableFilter;
}
