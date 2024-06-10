import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
export declare class PostScalarWhereWithAggregatesInput {
    AND?: Array<PostScalarWhereWithAggregatesInput>;
    OR?: Array<PostScalarWhereWithAggregatesInput>;
    NOT?: Array<PostScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    url?: StringNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    views?: IntWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    published?: BoolWithAggregatesFilter;
    title?: StringWithAggregatesFilter;
    content?: StringWithAggregatesFilter;
    authorId?: StringNullableWithAggregatesFilter;
}
