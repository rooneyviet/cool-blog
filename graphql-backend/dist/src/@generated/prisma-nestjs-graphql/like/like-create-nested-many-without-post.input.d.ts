import { LikeCreateWithoutPostInput } from './like-create-without-post.input';
import { LikeCreateOrConnectWithoutPostInput } from './like-create-or-connect-without-post.input';
import { LikeCreateManyPostInputEnvelope } from './like-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
export declare class LikeCreateNestedManyWithoutPostInput {
    create?: Array<LikeCreateWithoutPostInput>;
    connectOrCreate?: Array<LikeCreateOrConnectWithoutPostInput>;
    createMany?: LikeCreateManyPostInputEnvelope;
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;
}
