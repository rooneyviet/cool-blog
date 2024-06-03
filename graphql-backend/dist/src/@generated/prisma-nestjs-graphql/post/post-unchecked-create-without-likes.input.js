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
exports.PostUncheckedCreateWithoutLikesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const categories_on_posts_unchecked_create_nested_many_without_post_input_1 = require("../categories-on-posts/categories-on-posts-unchecked-create-nested-many-without-post.input");
const comment_unchecked_create_nested_many_without_post_input_1 = require("../comment/comment-unchecked-create-nested-many-without-post.input");
let PostUncheckedCreateWithoutLikesInput = class PostUncheckedCreateWithoutLikesInput {
};
exports.PostUncheckedCreateWithoutLikesInput = PostUncheckedCreateWithoutLikesInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PostUncheckedCreateWithoutLikesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PostUncheckedCreateWithoutLikesInput.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PostUncheckedCreateWithoutLikesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PostUncheckedCreateWithoutLikesInput.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PostUncheckedCreateWithoutLikesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false }),
    __metadata("design:type", Boolean)
], PostUncheckedCreateWithoutLikesInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PostUncheckedCreateWithoutLikesInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PostUncheckedCreateWithoutLikesInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PostUncheckedCreateWithoutLikesInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_unchecked_create_nested_many_without_post_input_1.CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_unchecked_create_nested_many_without_post_input_1.CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput)
], PostUncheckedCreateWithoutLikesInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_unchecked_create_nested_many_without_post_input_1.CommentUncheckedCreateNestedManyWithoutPostInput, { nullable: true }),
    __metadata("design:type", comment_unchecked_create_nested_many_without_post_input_1.CommentUncheckedCreateNestedManyWithoutPostInput)
], PostUncheckedCreateWithoutLikesInput.prototype, "comments", void 0);
exports.PostUncheckedCreateWithoutLikesInput = PostUncheckedCreateWithoutLikesInput = __decorate([
    (0, graphql_2.InputType)()
], PostUncheckedCreateWithoutLikesInput);
//# sourceMappingURL=post-unchecked-create-without-likes.input.js.map