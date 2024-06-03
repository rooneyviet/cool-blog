import { Role } from '../prisma/role.enum';
import { Post } from '../post/post.model';
import { Like } from '../like/like.model';
import { Comment } from '../comment/comment.model';
import { UserCount } from './user-count.output';
export declare class User {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    username: string;
    userStatus: string;
    password: string;
    role: keyof typeof Role;
    posts?: Array<Post>;
    likes?: Array<Like>;
    comments?: Array<Comment>;
    _count?: UserCount;
}
