import { CategoryWhereInput } from './category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { CategoriesOnPostsListRelationFilter } from '../categories-on-posts/categories-on-posts-list-relation-filter.input';
export declare class CategoryWhereUniqueInput {
    id?: string;
    AND?: Array<CategoryWhereInput>;
    OR?: Array<CategoryWhereInput>;
    NOT?: Array<CategoryWhereInput>;
    name?: StringFilter;
    description?: StringNullableFilter;
    posts?: CategoriesOnPostsListRelationFilter;
}
