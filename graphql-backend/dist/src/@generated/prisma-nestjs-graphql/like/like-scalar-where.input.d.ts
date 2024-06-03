import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class LikeScalarWhereInput {
    AND?: Array<LikeScalarWhereInput>;
    OR?: Array<LikeScalarWhereInput>;
    NOT?: Array<LikeScalarWhereInput>;
    id?: StringFilter;
    userId?: StringFilter;
    postId?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
