import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class CategoriesOnPostsScalarWhereWithAggregatesInput {
    AND?: Array<CategoriesOnPostsScalarWhereWithAggregatesInput>;
    OR?: Array<CategoriesOnPostsScalarWhereWithAggregatesInput>;
    NOT?: Array<CategoriesOnPostsScalarWhereWithAggregatesInput>;
    postId?: StringWithAggregatesFilter;
    categoryId?: StringWithAggregatesFilter;
    assignedAt?: DateTimeWithAggregatesFilter;
    assignedBy?: StringWithAggregatesFilter;
}
