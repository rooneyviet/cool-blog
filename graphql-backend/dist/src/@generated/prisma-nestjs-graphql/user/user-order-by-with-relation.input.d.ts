import { SortOrder } from '../prisma/sort-order.enum';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
    userStatus?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
    posts?: PostOrderByRelationAggregateInput;
    likes?: LikeOrderByRelationAggregateInput;
    comments?: CommentOrderByRelationAggregateInput;
}
