import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import {
  AggregatePost,
  CreateManyPostArgs,
  CreateOnePostArgs,
  DeleteManyPostArgs,
  DeleteOnePostArgs,
  FindFirstPostArgs,
  FindManyPostArgs,
  FindUniquePostArgs,
  Post,
  PostAggregateArgs,
  PostCreateInput,
  PostGroupBy,
  PostGroupByArgs,
  PostOrderByWithRelationInput,
  PostWhereInput,
  UpdateManyPostArgs,
  UpdateOnePostArgs,
} from 'src/@generated/prisma-nestjs-graphql/post';
import { AffectedRows } from 'src/@generated/prisma-nestjs-graphql/prisma';
import { User } from 'src/@generated/prisma-nestjs-graphql/user';
import { CurrentUser } from 'src/auth/get-current-user.decorator';
import { GqlJWTGuard } from 'src/guard/gql-jwt.guard';
import { PostService } from 'src/shared/services/post.service';
import { UserService } from 'src/shared/services/user.service';
//@UseGuards(GqlJWTGuard, RolesGuard)
@Resolver(() => Post)
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  @Query(() => Post, { nullable: false })
  findFirstPost(@Args() args: FindFirstPostArgs) {
    this.postService.findFirst(args);
  }

  @Query(() => Post, { nullable: false })
  findUniquePost(@Args() args: FindUniquePostArgs) {
    return this.postService.findUnique(args);
  }

  @UseGuards(GqlJWTGuard)
  @Query(() => [Post], { nullable: false })
  async listPosts(
    @Args('postWhereInputArgs') postWhereInputArgs?: PostWhereInput,
    //@Args('orderByArgs') orderByArgs?: Array<PostOrderByWithRelationInput>,
  ) {
    await this.postService.findMany({
      include: {
        author: true,
      },
      where: postWhereInputArgs,
    });

    const posts: Post[] = await this.postService.findMany({
      include: {
        author: true,
      },
      where: postWhereInputArgs,
    });

    return posts;
  }

  @Query(() => [PostGroupBy], { nullable: false })
  groupByPost(@Args() args: PostGroupByArgs) {
    return this.postService.groupBy(args);
  }

  @Query(() => AggregatePost, { nullable: false })
  aggregatePost(@Args() args: PostAggregateArgs) {
    return this.postService.aggregate(args);
  }

  @UseGuards(GqlJWTGuard)
  @Mutation(() => Post, { nullable: true })
  async createPost(
    @Args('postCreateInput') args: PostCreateInput,
    @CurrentUser() user: User,
  ) {
    const postCreateArgs: PostCreateInput = args;

    postCreateArgs.author = {
      connect: { id: user.id },
    };

    return await this.postService.create({ data: postCreateArgs });
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyPost(@Args() args: CreateManyPostArgs) {
    return this.postService.createMany(args);
  }

  @Mutation(() => Post, { nullable: true })
  updatePost(@Args() args: UpdateOnePostArgs) {
    return this.postService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyPost(@Args() args: UpdateManyPostArgs) {
    return this.postService.updateMany(args);
  }

  @Mutation(() => Post, { nullable: true })
  deletePost(@Args() args: DeleteOnePostArgs) {
    return this.postService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyPost(@Args() args: DeleteManyPostArgs) {
    return this.postService.deleteMany(args);
  }
}
