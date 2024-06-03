import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class CategoriesOnPostsScalarWhereInput {
    AND?: Array<CategoriesOnPostsScalarWhereInput>;
    OR?: Array<CategoriesOnPostsScalarWhereInput>;
    NOT?: Array<CategoriesOnPostsScalarWhereInput>;
    postId?: StringFilter;
    categoryId?: StringFilter;
    assignedAt?: DateTimeFilter;
    assignedBy?: StringFilter;
}
