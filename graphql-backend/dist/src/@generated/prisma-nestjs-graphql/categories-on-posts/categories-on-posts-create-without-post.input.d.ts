import { CategoryCreateNestedOneWithoutPostsInput } from '../category/category-create-nested-one-without-posts.input';
export declare class CategoriesOnPostsCreateWithoutPostInput {
    assignedAt?: Date | string;
    assignedBy: string;
    category: CategoryCreateNestedOneWithoutPostsInput;
}
