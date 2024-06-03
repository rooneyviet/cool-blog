import { SortOrder } from '../prisma/sort-order.enum';
import { PostOrderByWithRelationInput } from '../post/post-order-by-with-relation.input';
import { CategoryOrderByWithRelationInput } from '../category/category-order-by-with-relation.input';
export declare class CategoriesOnPostsOrderByWithRelationInput {
    postId?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    assignedAt?: keyof typeof SortOrder;
    assignedBy?: keyof typeof SortOrder;
    post?: PostOrderByWithRelationInput;
    category?: CategoryOrderByWithRelationInput;
}
