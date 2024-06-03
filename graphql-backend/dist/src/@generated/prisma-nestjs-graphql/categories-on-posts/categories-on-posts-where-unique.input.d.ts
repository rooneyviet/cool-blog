import { CategoriesOnPostsPostIdCategoryIdCompoundUniqueInput } from './categories-on-posts-post-id-category-id-compound-unique.input';
import { CategoriesOnPostsWhereInput } from './categories-on-posts-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';
export declare class CategoriesOnPostsWhereUniqueInput {
    postId_categoryId?: CategoriesOnPostsPostIdCategoryIdCompoundUniqueInput;
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
