import { PostUpdateWithoutLikesInput } from './post-update-without-likes.input';
import { PostCreateWithoutLikesInput } from './post-create-without-likes.input';
import { PostWhereInput } from './post-where.input';
export declare class PostUpsertWithoutLikesInput {
    update: PostUpdateWithoutLikesInput;
    create: PostCreateWithoutLikesInput;
    where?: PostWhereInput;
}
