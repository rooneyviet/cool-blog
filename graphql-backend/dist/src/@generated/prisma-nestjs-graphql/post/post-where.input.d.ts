import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { CategoriesOnPostsListRelationFilter } from '../categories-on-posts/categories-on-posts-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
export declare class PostWhereInput {
    AND?: Array<PostWhereInput>;
    OR?: Array<PostWhereInput>;
    NOT?: Array<PostWhereInput>;
    id?: StringFilter;
    url?: StringFilter;
    createdAt?: DateTimeFilter;
    views?: IntFilter;
    updatedAt?: DateTimeFilter;
    published?: BoolFilter;
    title?: StringFilter;
    content?: StringNullableFilter;
    authorId?: StringNullableFilter;
    author?: UserNullableRelationFilter;
    categories?: CategoriesOnPostsListRelationFilter;
    likes?: LikeListRelationFilter;
    comments?: CommentListRelationFilter;
}
