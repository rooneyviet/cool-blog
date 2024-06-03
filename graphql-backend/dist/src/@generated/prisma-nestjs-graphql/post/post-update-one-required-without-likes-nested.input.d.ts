import { PostCreateWithoutLikesInput } from './post-create-without-likes.input';
import { PostCreateOrConnectWithoutLikesInput } from './post-create-or-connect-without-likes.input';
import { PostUpsertWithoutLikesInput } from './post-upsert-without-likes.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateToOneWithWhereWithoutLikesInput } from './post-update-to-one-with-where-without-likes.input';
export declare class PostUpdateOneRequiredWithoutLikesNestedInput {
    create?: PostCreateWithoutLikesInput;
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput;
    upsert?: PostUpsertWithoutLikesInput;
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    update?: PostUpdateToOneWithWhereWithoutLikesInput;
}
