import { LikeCreateWithoutUserInput } from './like-create-without-user.input';
import { LikeCreateOrConnectWithoutUserInput } from './like-create-or-connect-without-user.input';
import { LikeUpsertWithWhereUniqueWithoutUserInput } from './like-upsert-with-where-unique-without-user.input';
import { LikeCreateManyUserInputEnvelope } from './like-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithWhereUniqueWithoutUserInput } from './like-update-with-where-unique-without-user.input';
import { LikeUpdateManyWithWhereWithoutUserInput } from './like-update-many-with-where-without-user.input';
import { LikeScalarWhereInput } from './like-scalar-where.input';
export declare class LikeUpdateManyWithoutUserNestedInput {
    create?: Array<LikeCreateWithoutUserInput>;
    connectOrCreate?: Array<LikeCreateOrConnectWithoutUserInput>;
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: LikeCreateManyUserInputEnvelope;
    set?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;
    update?: Array<LikeUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<LikeUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<LikeScalarWhereInput>;
}
