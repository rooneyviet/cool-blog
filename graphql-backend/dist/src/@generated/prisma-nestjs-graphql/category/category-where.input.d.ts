import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { CategoriesOnPostsListRelationFilter } from '../categories-on-posts/categories-on-posts-list-relation-filter.input';
export declare class CategoryWhereInput {
    AND?: Array<CategoryWhereInput>;
    OR?: Array<CategoryWhereInput>;
    NOT?: Array<CategoryWhereInput>;
    id?: StringFilter;
    name?: StringFilter;
    description?: StringNullableFilter;
    posts?: CategoriesOnPostsListRelationFilter;
}
