import { PostUpdateWithoutCategoriesInput } from './post-update-without-categories.input';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { PostWhereInput } from './post-where.input';
export declare class PostUpsertWithoutCategoriesInput {
    update: PostUpdateWithoutCategoriesInput;
    create: PostCreateWithoutCategoriesInput;
    where?: PostWhereInput;
}
