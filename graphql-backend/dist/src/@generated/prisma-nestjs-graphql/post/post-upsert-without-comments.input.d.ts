import { PostUpdateWithoutCommentsInput } from './post-update-without-comments.input';
import { PostCreateWithoutCommentsInput } from './post-create-without-comments.input';
import { PostWhereInput } from './post-where.input';
export declare class PostUpsertWithoutCommentsInput {
    update: PostUpdateWithoutCommentsInput;
    create: PostCreateWithoutCommentsInput;
    where?: PostWhereInput;
}
