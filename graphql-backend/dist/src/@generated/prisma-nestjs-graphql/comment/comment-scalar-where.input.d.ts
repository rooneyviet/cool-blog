import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class CommentScalarWhereInput {
    AND?: Array<CommentScalarWhereInput>;
    OR?: Array<CommentScalarWhereInput>;
    NOT?: Array<CommentScalarWhereInput>;
    id?: IntFilter;
    text?: StringFilter;
    postId?: StringFilter;
    userId?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
