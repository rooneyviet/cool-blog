import { LikeWhereInput } from './like-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';
export declare class LikeWhereUniqueInput {
    id?: string;
    AND?: Array<LikeWhereInput>;
    OR?: Array<LikeWhereInput>;
    NOT?: Array<LikeWhereInput>;
    userId?: StringFilter;
    postId?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    user?: UserRelationFilter;
    post?: PostRelationFilter;
}
