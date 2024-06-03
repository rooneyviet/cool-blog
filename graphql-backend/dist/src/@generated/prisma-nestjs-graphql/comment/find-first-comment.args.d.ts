import { CommentWhereInput } from './comment-where.input';
import { CommentOrderByWithRelationInput } from './comment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum';
export declare class FindFirstCommentArgs {
    where?: CommentWhereInput;
    orderBy?: Array<CommentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}
