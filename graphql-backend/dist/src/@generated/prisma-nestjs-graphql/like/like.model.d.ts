import { User } from '../user/user.model';
import { Post } from '../post/post.model';
export declare class Like {
    id: string;
    userId: string;
    postId: string;
    createdAt: Date;
    updatedAt: Date;
    user?: User;
    post?: Post;
}
