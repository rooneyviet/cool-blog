import { User } from '../user/user.model';
import { CategoriesOnPosts } from '../categories-on-posts/categories-on-posts.model';
import { Like } from '../like/like.model';
import { Comment } from '../comment/comment.model';
import { PostCount } from './post-count.output';
export declare class Post {
    id: string;
    url: string;
    createdAt: Date;
    views: number;
    updatedAt: Date;
    published: boolean;
    title: string;
    content: string | null;
    authorId: string | null;
    author?: User | null;
    categories?: Array<CategoriesOnPosts>;
    likes?: Array<Like>;
    comments?: Array<Comment>;
    _count?: PostCount;
}
