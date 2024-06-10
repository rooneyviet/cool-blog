"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const post_1 = require("../../@generated/prisma-nestjs-graphql/post");
const prisma_1 = require("../../@generated/prisma-nestjs-graphql/prisma");
const user_1 = require("../../@generated/prisma-nestjs-graphql/user");
const get_current_user_decorator_1 = require("../../auth/get-current-user.decorator");
const gql_jwt_guard_1 = require("../../guard/gql-jwt.guard");
const post_service_1 = require("../../shared/services/post.service");
const user_service_1 = require("../../shared/services/user.service");
let PostResolver = class PostResolver {
    constructor(postService, userService) {
        this.postService = postService;
        this.userService = userService;
    }
    findFirstPost(args) {
        this.postService.findFirst(args);
    }
    findUniquePost(args) {
        return this.postService.findUnique(args);
    }
    async listPosts(postWhereInputArgs) {
        await this.postService.findMany({
            include: {
                author: true,
            },
            where: postWhereInputArgs,
        });
        const posts = await this.postService.findMany({
            include: {
                author: true,
            },
            where: postWhereInputArgs,
        });
        return posts;
    }
    groupByPost(args) {
        return this.postService.groupBy(args);
    }
    aggregatePost(args) {
        return this.postService.aggregate(args);
    }
    async createPost(args, user) {
        const postCreateArgs = args;
        postCreateArgs.author = {
            connect: { id: user.id },
        };
        return await this.postService.create({ data: postCreateArgs });
    }
    createManyPost(args) {
        return this.postService.createMany(args);
    }
    updatePost(args) {
        return this.postService.update(args);
    }
    updateManyPost(args) {
        return this.postService.updateMany(args);
    }
    deletePost(args) {
        return this.postService.delete(args);
    }
    deleteManyPost(args) {
        return this.postService.deleteMany(args);
    }
};
exports.PostResolver = PostResolver;
__decorate([
    (0, graphql_1.Query)(() => post_1.Post, { nullable: false }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.FindFirstPostArgs]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "findFirstPost", null);
__decorate([
    (0, graphql_1.Query)(() => post_1.Post, { nullable: false }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.FindUniquePostArgs]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "findUniquePost", null);
__decorate([
    (0, common_1.UseGuards)(gql_jwt_guard_1.GqlJWTGuard),
    (0, graphql_1.Query)(() => [post_1.Post], { nullable: false }),
    __param(0, (0, graphql_1.Args)('postWhereInputArgs')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.PostWhereInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "listPosts", null);
__decorate([
    (0, graphql_1.Query)(() => [post_1.PostGroupBy], { nullable: false }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.PostGroupByArgs]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "groupByPost", null);
__decorate([
    (0, graphql_1.Query)(() => post_1.AggregatePost, { nullable: false }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.PostAggregateArgs]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "aggregatePost", null);
__decorate([
    (0, common_1.UseGuards)(gql_jwt_guard_1.GqlJWTGuard),
    (0, graphql_1.Mutation)(() => post_1.Post, { nullable: true }),
    __param(0, (0, graphql_1.Args)('postCreateInput')),
    __param(1, (0, get_current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.PostCreateInput,
        user_1.User]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
__decorate([
    (0, graphql_1.Mutation)(() => prisma_1.AffectedRows, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.CreateManyPostArgs]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "createManyPost", null);
__decorate([
    (0, graphql_1.Mutation)(() => post_1.Post, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.UpdateOnePostArgs]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "updatePost", null);
__decorate([
    (0, graphql_1.Mutation)(() => prisma_1.AffectedRows, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.UpdateManyPostArgs]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "updateManyPost", null);
__decorate([
    (0, graphql_1.Mutation)(() => post_1.Post, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.DeleteOnePostArgs]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "deletePost", null);
__decorate([
    (0, graphql_1.Mutation)(() => prisma_1.AffectedRows, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.DeleteManyPostArgs]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "deleteManyPost", null);
exports.PostResolver = PostResolver = __decorate([
    (0, graphql_1.Resolver)(() => post_1.Post),
    __metadata("design:paramtypes", [post_service_1.PostService,
        user_service_1.UserService])
], PostResolver);
//# sourceMappingURL=post.resolver.js.map