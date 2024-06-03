import { PostCreateWithoutCommentsInput } from './post-create-without-comments.input';
import { PostCreateOrConnectWithoutCommentsInput } from './post-create-or-connect-without-comments.input';
import { PostUpsertWithoutCommentsInput } from './post-upsert-without-comments.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateToOneWithWhereWithoutCommentsInput } from './post-update-to-one-with-where-without-comments.input';
export declare class PostUpdateOneRequiredWithoutCommentsNestedInput {
    create?: PostCreateWithoutCommentsInput;
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput;
    upsert?: PostUpsertWithoutCommentsInput;
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    update?: PostUpdateToOneWithWhereWithoutCommentsInput;
}
