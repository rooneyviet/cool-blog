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
exports.PostCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const user_create_nested_one_without_posts_input_1 = require("../user/user-create-nested-one-without-posts.input");
const categories_on_posts_create_nested_many_without_post_input_1 = require("../categories-on-posts/categories-on-posts-create-nested-many-without-post.input");
const like_create_nested_many_without_post_input_1 = require("../like/like-create-nested-many-without-post.input");
const comment_create_nested_many_without_post_input_1 = require("../comment/comment-create-nested-many-without-post.input");
let PostCreateInput = class PostCreateInput {
};
exports.PostCreateInput = PostCreateInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PostCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PostCreateInput.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PostCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PostCreateInput.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PostCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false }),
    __metadata("design:type", Boolean)
], PostCreateInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PostCreateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PostCreateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_posts_input_1.UserCreateNestedOneWithoutPostsInput, { nullable: true }),
    __metadata("design:type", user_create_nested_one_without_posts_input_1.UserCreateNestedOneWithoutPostsInput)
], PostCreateInput.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_create_nested_many_without_post_input_1.CategoriesOnPostsCreateNestedManyWithoutPostInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_create_nested_many_without_post_input_1.CategoriesOnPostsCreateNestedManyWithoutPostInput)
], PostCreateInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_create_nested_many_without_post_input_1.LikeCreateNestedManyWithoutPostInput, { nullable: true }),
    __metadata("design:type", like_create_nested_many_without_post_input_1.LikeCreateNestedManyWithoutPostInput)
], PostCreateInput.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_create_nested_many_without_post_input_1.CommentCreateNestedManyWithoutPostInput, { nullable: true }),
    __metadata("design:type", comment_create_nested_many_without_post_input_1.CommentCreateNestedManyWithoutPostInput)
], PostCreateInput.prototype, "comments", void 0);
exports.PostCreateInput = PostCreateInput = __decorate([
    (0, graphql_2.InputType)()
], PostCreateInput);
//# sourceMappingURL=post-create.input.js.map