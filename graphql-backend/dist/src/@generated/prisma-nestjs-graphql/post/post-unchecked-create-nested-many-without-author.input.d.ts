import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { PostCreateOrConnectWithoutAuthorInput } from './post-create-or-connect-without-author.input';
import { PostCreateManyAuthorInputEnvelope } from './post-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
export declare class PostUncheckedCreateNestedManyWithoutAuthorInput {
    create?: Array<PostCreateWithoutAuthorInput>;
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>>;
}
