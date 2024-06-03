import { SortOrder } from '../prisma/sort-order.enum';
import { PostOrderByWithRelationInput } from '../post/post-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
export declare class CommentOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    text?: keyof typeof SortOrder;
    postId?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    post?: PostOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
}
