import { CategoriesOnPostsCreateNestedManyWithoutCategoryInput } from '../categories-on-posts/categories-on-posts-create-nested-many-without-category.input';
export declare class CategoryCreateInput {
    id?: string;
    name: string;
    description?: string;
    posts?: CategoriesOnPostsCreateNestedManyWithoutCategoryInput;
}
