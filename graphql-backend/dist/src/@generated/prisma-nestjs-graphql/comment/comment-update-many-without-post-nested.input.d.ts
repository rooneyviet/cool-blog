import { CommentCreateWithoutPostInput } from './comment-create-without-post.input';
import { CommentCreateOrConnectWithoutPostInput } from './comment-create-or-connect-without-post.input';
import { CommentUpsertWithWhereUniqueWithoutPostInput } from './comment-upsert-with-where-unique-without-post.input';
import { CommentCreateManyPostInputEnvelope } from './comment-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutPostInput } from './comment-update-with-where-unique-without-post.input';
import { CommentUpdateManyWithWhereWithoutPostInput } from './comment-update-many-with-where-without-post.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';
export declare class CommentUpdateManyWithoutPostNestedInput {
    create?: Array<CommentCreateWithoutPostInput>;
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPostInput>;
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutPostInput>;
    createMany?: CommentCreateManyPostInputEnvelope;
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    update?: Array<CommentUpdateWithWhereUniqueWithoutPostInput>;
    updateMany?: Array<CommentUpdateManyWithWhereWithoutPostInput>;
    deleteMany?: Array<CommentScalarWhereInput>;
}
