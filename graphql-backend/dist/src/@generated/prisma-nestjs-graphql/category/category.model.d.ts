import { CategoriesOnPosts } from '../categories-on-posts/categories-on-posts.model';
import { CategoryCount } from './category-count.output';
export declare class Category {
    id: string;
    name: string;
    description: string | null;
    posts?: Array<CategoriesOnPosts>;
    _count?: CategoryCount;
}
