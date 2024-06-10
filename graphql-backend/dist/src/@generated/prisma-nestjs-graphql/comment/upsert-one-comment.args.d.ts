import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateInput } from './comment-create.input';
import { CommentUpdateInput } from './comment-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneCommentArgs {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    create: CommentCreateInput;
    update: CommentUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
