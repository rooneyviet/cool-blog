import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';
export declare class LikeWhereInput {
    AND?: Array<LikeWhereInput>;
    OR?: Array<LikeWhereInput>;
    NOT?: Array<LikeWhereInput>;
    id?: StringFilter;
    userId?: StringFilter;
    postId?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    user?: UserRelationFilter;
    post?: PostRelationFilter;
}
