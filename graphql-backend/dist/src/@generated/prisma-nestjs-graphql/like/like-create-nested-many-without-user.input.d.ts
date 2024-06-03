import { LikeCreateWithoutUserInput } from './like-create-without-user.input';
import { LikeCreateOrConnectWithoutUserInput } from './like-create-or-connect-without-user.input';
import { LikeCreateManyUserInputEnvelope } from './like-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
export declare class LikeCreateNestedManyWithoutUserInput {
    create?: Array<LikeCreateWithoutUserInput>;
    connectOrCreate?: Array<LikeCreateOrConnectWithoutUserInput>;
    createMany?: LikeCreateManyUserInputEnvelope;
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;
}
