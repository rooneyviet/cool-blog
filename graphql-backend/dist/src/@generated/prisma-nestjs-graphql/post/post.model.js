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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
const categories_on_posts_model_1 = require("../categories-on-posts/categories-on-posts.model");
const like_model_1 = require("../like/like.model");
const comment_model_1 = require("../comment/comment.model");
const post_count_output_1 = require("./post-count.output");
let Post = class Post {
};
exports.Post = Post;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], Post.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Post.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Post.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false, defaultValue: 0 }),
    __metadata("design:type", Number)
], Post.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Post.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false }),
    __metadata("design:type", Boolean)
], Post.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: true }),
    __metadata("design:type", user_model_1.User)
], Post.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_model_1.CategoriesOnPosts], { nullable: true }),
    __metadata("design:type", Array)
], Post.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_model_1.Like], { nullable: true }),
    __metadata("design:type", Array)
], Post.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_model_1.Comment], { nullable: true }),
    __metadata("design:type", Array)
], Post.prototype, "comments", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_count_output_1.PostCount, { nullable: false }),
    __metadata("design:type", post_count_output_1.PostCount)
], Post.prototype, "_count", void 0);
exports.Post = Post = __decorate([
    (0, graphql_2.ObjectType)()
], Post);
//# sourceMappingURL=post.model.js.map