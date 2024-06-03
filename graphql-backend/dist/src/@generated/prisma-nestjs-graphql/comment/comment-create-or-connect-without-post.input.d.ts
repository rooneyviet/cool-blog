import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutPostInput } from './comment-create-without-post.input';
export declare class CommentCreateOrConnectWithoutPostInput {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    create: CommentCreateWithoutPostInput;
}
