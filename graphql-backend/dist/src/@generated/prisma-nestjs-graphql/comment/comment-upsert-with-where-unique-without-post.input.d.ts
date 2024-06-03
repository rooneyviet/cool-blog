import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutPostInput } from './comment-update-without-post.input';
import { CommentCreateWithoutPostInput } from './comment-create-without-post.input';
export declare class CommentUpsertWithWhereUniqueWithoutPostInput {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    update: CommentUpdateWithoutPostInput;
    create: CommentCreateWithoutPostInput;
}
