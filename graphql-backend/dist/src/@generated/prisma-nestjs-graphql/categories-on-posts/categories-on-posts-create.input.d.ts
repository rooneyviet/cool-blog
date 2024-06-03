import { PostCreateNestedOneWithoutCategoriesInput } from '../post/post-create-nested-one-without-categories.input';
import { CategoryCreateNestedOneWithoutPostsInput } from '../category/category-create-nested-one-without-posts.input';
export declare class CategoriesOnPostsCreateInput {
    assignedAt?: Date | string;
    assignedBy: string;
    post: PostCreateNestedOneWithoutCategoriesInput;
    category: CategoryCreateNestedOneWithoutPostsInput;
}
