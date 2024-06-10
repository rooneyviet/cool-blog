import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostCreateInput } from './post-create.input';
import { PostUpdateInput } from './post-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOnePostArgs {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    create: PostCreateInput;
    update: PostUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
