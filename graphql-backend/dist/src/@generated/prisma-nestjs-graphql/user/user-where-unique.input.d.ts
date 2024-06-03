import { UserWhereInput } from './user-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
export declare class UserWhereUniqueInput {
    id?: string;
    email?: string;
    username?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    userStatus?: StringFilter;
    password?: StringFilter;
    role?: EnumRoleFilter;
    posts?: PostListRelationFilter;
    likes?: LikeListRelationFilter;
    comments?: CommentListRelationFilter;
}
