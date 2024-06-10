import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CategoriesOnPostsOrderByRelationAggregateInput } from '../categories-on-posts/categories-on-posts-order-by-relation-aggregate.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
export declare class PostOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    url?: SortOrderInput;
    createdAt?: keyof typeof SortOrder;
    views?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    published?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    authorId?: SortOrderInput;
    author?: UserOrderByWithRelationInput;
    categories?: CategoriesOnPostsOrderByRelationAggregateInput;
    likes?: LikeOrderByRelationAggregateInput;
    comments?: CommentOrderByRelationAggregateInput;
}
