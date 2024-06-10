import { BaseCrudService } from './base.service';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PostService extends BaseCrudService<Post, Prisma.PostFindFirstArgs, Prisma.PostFindUniqueArgs, Prisma.PostFindManyArgs, Prisma.PostGroupByArgs, Prisma.PostAggregateArgs, Prisma.PostCreateArgs, Prisma.PostCreateManyArgs, Prisma.PostUpdateArgs, Prisma.PostUpdateManyArgs, Prisma.PostDeleteArgs, Prisma.PostDeleteManyArgs> {
    constructor(prisma: PrismaService);
    create(args: Prisma.PostCreateArgs): Promise<Post | null>;
    createMany(args: Prisma.PostCreateManyArgs): Promise<Prisma.BatchPayload>;
    update(args: Prisma.PostUpdateArgs): Promise<Post>;
    updateMany(args: Prisma.PostUpdateManyArgs): Promise<Post[]>;
    private generateUniqueUrl;
}
