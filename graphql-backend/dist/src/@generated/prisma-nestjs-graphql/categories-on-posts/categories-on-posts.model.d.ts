import { Post } from '../post/post.model';
import { Category } from '../category/category.model';
export declare class CategoriesOnPosts {
    postId: string;
    categoryId: string;
    assignedAt: Date;
    assignedBy: string;
    post?: Post;
    category?: Category;
}
