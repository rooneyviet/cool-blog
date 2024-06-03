import { CommentCreateWithoutPostInput } from './comment-create-without-post.input';
import { CommentCreateOrConnectWithoutPostInput } from './comment-create-or-connect-without-post.input';
import { CommentCreateManyPostInputEnvelope } from './comment-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
export declare class CommentUncheckedCreateNestedManyWithoutPostInput {
    create?: Array<CommentCreateWithoutPostInput>;
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPostInput>;
    createMany?: CommentCreateManyPostInputEnvelope;
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
