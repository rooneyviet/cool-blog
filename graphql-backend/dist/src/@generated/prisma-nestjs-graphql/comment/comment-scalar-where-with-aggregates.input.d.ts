import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class CommentScalarWhereWithAggregatesInput {
    AND?: Array<CommentScalarWhereWithAggregatesInput>;
    OR?: Array<CommentScalarWhereWithAggregatesInput>;
    NOT?: Array<CommentScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    text?: StringWithAggregatesFilter;
    postId?: StringWithAggregatesFilter;
    userId?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
