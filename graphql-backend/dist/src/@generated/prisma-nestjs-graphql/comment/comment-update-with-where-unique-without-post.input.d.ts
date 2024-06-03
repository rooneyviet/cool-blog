import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutPostInput } from './comment-update-without-post.input';
export declare class CommentUpdateWithWhereUniqueWithoutPostInput {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    data: CommentUpdateWithoutPostInput;
}
