import { Injectable } from '@nestjs/common';
import { BaseCrudService } from './base.service';
import { Post, Prisma } from '@prisma/client';
import slugify from 'slugify';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/@generated/prisma-nestjs-graphql/user';
@Injectable()
export class PostService extends BaseCrudService<
  Post,
  Prisma.PostFindFirstArgs,
  Prisma.PostFindUniqueArgs,
  Prisma.PostFindManyArgs,
  Prisma.PostGroupByArgs,
  Prisma.PostAggregateArgs,
  Prisma.PostCreateArgs,
  Prisma.PostCreateManyArgs,
  Prisma.PostUpdateArgs,
  Prisma.PostUpdateManyArgs,
  Prisma.PostDeleteArgs,
  Prisma.PostDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  async create(args: Prisma.PostCreateArgs): Promise<Post | null> {
    args.data.url = await this.generateUniqueUrl(args.data.title);
    return this.prisma.post.create(args);
  }

  async createMany(args: Prisma.PostCreateManyArgs) {
    if (Array.isArray(args.data)) {
      await Promise.all(
        args.data.map(async (post) => {
          post.url = await this.generateUniqueUrl(post.url);
        }),
      );
    } else {
      args.data.url = await this.generateUniqueUrl(args.data.url);
    }
    return this.prisma.post.createMany(args);
  }

  async update(args: Prisma.PostUpdateArgs): Promise<Post> {
    if (args.data.title) {
      args.data.url = await this.generateUniqueUrl(args.data.title);
    }
    return this.prisma.post.update(args);
  }

  async updateMany(args: Prisma.PostUpdateManyArgs): Promise<Post[]> {
    if (Array.isArray(args.data)) {
      await Promise.all(
        args.data.map(async (post) => {
          if (post.url) {
            post.url = await this.generateUniqueUrl(post.url);
          }
        }),
      );
    } else {
      if (args.data.url) {
        args.data.url = await this.generateUniqueUrl(args.data.url);
      }
    }
    return this.prisma[this.modelName].updateMany(args);
  }

  private async generateUniqueUrl(title) {
    let baseURL = slugify(title);
    let url = baseURL;
    let counter = 2;

    while (true) {
      const existingPost = await this.prisma.post.findUnique({
        where: { url },
      });
      if (!existingPost) {
        return url;
      }
      url = `${baseURL}-${counter}`;
      counter++;
    }
  }
}
