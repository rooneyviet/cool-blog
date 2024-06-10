import { CommentWhereInput } from './comment-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
export declare class CommentWhereUniqueInput {
    id?: string;
    AND?: Array<CommentWhereInput>;
    OR?: Array<CommentWhereInput>;
    NOT?: Array<CommentWhereInput>;
    text?: StringFilter;
    postId?: StringFilter;
    userId?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    post?: PostRelationFilter;
    user?: UserRelationFilter;
}
