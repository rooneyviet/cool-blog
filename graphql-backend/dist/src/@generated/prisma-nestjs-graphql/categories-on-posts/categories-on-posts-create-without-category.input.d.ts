import { PostCreateNestedOneWithoutCategoriesInput } from '../post/post-create-nested-one-without-categories.input';
export declare class CategoriesOnPostsCreateWithoutCategoryInput {
    assignedAt?: Date | string;
    assignedBy: string;
    post: PostCreateNestedOneWithoutCategoriesInput;
}
