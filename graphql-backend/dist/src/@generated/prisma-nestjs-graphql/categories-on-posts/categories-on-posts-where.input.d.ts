import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';
export declare class CategoriesOnPostsWhereInput {
    AND?: Array<CategoriesOnPostsWhereInput>;
    OR?: Array<CategoriesOnPostsWhereInput>;
    NOT?: Array<CategoriesOnPostsWhereInput>;
    postId?: StringFilter;
    categoryId?: StringFilter;
    assignedAt?: DateTimeFilter;
    assignedBy?: StringFilter;
    post?: PostRelationFilter;
    category?: CategoryRelationFilter;
}
