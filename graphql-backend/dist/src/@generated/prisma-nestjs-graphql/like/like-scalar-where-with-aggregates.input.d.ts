import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class LikeScalarWhereWithAggregatesInput {
    AND?: Array<LikeScalarWhereWithAggregatesInput>;
    OR?: Array<LikeScalarWhereWithAggregatesInput>;
    NOT?: Array<LikeScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    userId?: StringWithAggregatesFilter;
    postId?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
