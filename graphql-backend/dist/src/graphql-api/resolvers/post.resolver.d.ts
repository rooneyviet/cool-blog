import { CreateManyPostArgs, DeleteManyPostArgs, DeleteOnePostArgs, FindFirstPostArgs, FindUniquePostArgs, Post, PostAggregateArgs, PostCreateInput, PostGroupByArgs, PostWhereInput, UpdateManyPostArgs, UpdateOnePostArgs } from 'src/@generated/prisma-nestjs-graphql/post';
import { User } from 'src/@generated/prisma-nestjs-graphql/user';
import { PostService } from 'src/shared/services/post.service';
import { UserService } from 'src/shared/services/user.service';
export declare class PostResolver {
    private readonly postService;
    private readonly userService;
    constructor(postService: PostService, userService: UserService);
    findFirstPost(args: FindFirstPostArgs): void;
    findUniquePost(args: FindUniquePostArgs): Promise<{
        id: string;
        url: string;
        createdAt: Date;
        views: number;
        updatedAt: Date;
        published: boolean;
        title: string;
        content: string;
        authorId: string;
    }>;
    listPosts(postWhereInputArgs?: PostWhereInput): Promise<Post[]>;
    groupByPost(args: PostGroupByArgs): any;
    aggregatePost(args: PostAggregateArgs): any;
    createPost(args: PostCreateInput, user: User): Promise<{
        id: string;
        url: string;
        createdAt: Date;
        views: number;
        updatedAt: Date;
        published: boolean;
        title: string;
        content: string;
        authorId: string;
    }>;
    createManyPost(args: CreateManyPostArgs): Promise<import(".prisma/client").Prisma.BatchPayload>;
    updatePost(args: UpdateOnePostArgs): Promise<{
        id: string;
        url: string;
        createdAt: Date;
        views: number;
        updatedAt: Date;
        published: boolean;
        title: string;
        content: string;
        authorId: string;
    }>;
    updateManyPost(args: UpdateManyPostArgs): Promise<{
        id: string;
        url: string;
        createdAt: Date;
        views: number;
        updatedAt: Date;
        published: boolean;
        title: string;
        content: string;
        authorId: string;
    }[]>;
    deletePost(args: DeleteOnePostArgs): Promise<{
        id: string;
        url: string;
        createdAt: Date;
        views: number;
        updatedAt: Date;
        published: boolean;
        title: string;
        content: string;
        authorId: string;
    }>;
    deleteManyPost(args: DeleteManyPostArgs): Promise<{
        id: string;
        url: string;
        createdAt: Date;
        views: number;
        updatedAt: Date;
        published: boolean;
        title: string;
        content: string;
        authorId: string;
    }[]>;
}
