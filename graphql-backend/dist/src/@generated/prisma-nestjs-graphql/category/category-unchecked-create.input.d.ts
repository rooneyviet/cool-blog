import { CategoriesOnPostsUncheckedCreateNestedManyWithoutCategoryInput } from '../categories-on-posts/categories-on-posts-unchecked-create-nested-many-without-category.input';
export declare class CategoryUncheckedCreateInput {
    id?: string;
    name: string;
    description?: string;
    posts?: CategoriesOnPostsUncheckedCreateNestedManyWithoutCategoryInput;
}
