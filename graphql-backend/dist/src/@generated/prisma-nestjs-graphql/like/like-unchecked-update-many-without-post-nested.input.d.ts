import { LikeCreateWithoutPostInput } from './like-create-without-post.input';
import { LikeCreateOrConnectWithoutPostInput } from './like-create-or-connect-without-post.input';
import { LikeUpsertWithWhereUniqueWithoutPostInput } from './like-upsert-with-where-unique-without-post.input';
import { LikeCreateManyPostInputEnvelope } from './like-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithWhereUniqueWithoutPostInput } from './like-update-with-where-unique-without-post.input';
import { LikeUpdateManyWithWhereWithoutPostInput } from './like-update-many-with-where-without-post.input';
import { LikeScalarWhereInput } from './like-scalar-where.input';
export declare class LikeUncheckedUpdateManyWithoutPostNestedInput {
    create?: Array<LikeCreateWithoutPostInput>;
    connectOrCreate?: Array<LikeCreateOrConnectWithoutPostInput>;
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutPostInput>;
    createMany?: LikeCreateManyPostInputEnvelope;
    set?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;
    update?: Array<LikeUpdateWithWhereUniqueWithoutPostInput>;
    updateMany?: Array<LikeUpdateManyWithWhereWithoutPostInput>;
    deleteMany?: Array<LikeScalarWhereInput>;
}
