import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
export declare class PostScalarWhereInput {
    AND?: Array<PostScalarWhereInput>;
    OR?: Array<PostScalarWhereInput>;
    NOT?: Array<PostScalarWhereInput>;
    id?: StringFilter;
    url?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    views?: IntFilter;
    updatedAt?: DateTimeFilter;
    published?: BoolFilter;
    title?: StringFilter;
    content?: StringFilter;
    authorId?: StringNullableFilter;
}
