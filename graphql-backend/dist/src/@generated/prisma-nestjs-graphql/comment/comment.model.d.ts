import { Post } from '../post/post.model';
import { User } from '../user/user.model';
export declare class Comment {
    id: string;
    text: string;
    postId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    post?: Post;
    user?: User;
}
