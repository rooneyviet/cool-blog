import { CategoryUpdateWithoutPostsInput } from './category-update-without-posts.input';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { CategoryWhereInput } from './category-where.input';
export declare class CategoryUpsertWithoutPostsInput {
    update: CategoryUpdateWithoutPostsInput;
    create: CategoryCreateWithoutPostsInput;
    where?: CategoryWhereInput;
}
