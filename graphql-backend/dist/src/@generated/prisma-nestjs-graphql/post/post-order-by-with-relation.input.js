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
exports.PostOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
const categories_on_posts_order_by_relation_aggregate_input_1 = require("../categories-on-posts/categories-on-posts-order-by-relation-aggregate.input");
const like_order_by_relation_aggregate_input_1 = require("../like/like-order-by-relation-aggregate.input");
const comment_order_by_relation_aggregate_input_1 = require("../comment/comment-order-by-relation-aggregate.input");
let PostOrderByWithRelationInput = class PostOrderByWithRelationInput {
};
exports.PostOrderByWithRelationInput = PostOrderByWithRelationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], PostOrderByWithRelationInput.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithRelationInput.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithRelationInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithRelationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithRelationInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], PostOrderByWithRelationInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_order_by_with_relation_input_1.UserOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", user_order_by_with_relation_input_1.UserOrderByWithRelationInput)
], PostOrderByWithRelationInput.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_order_by_relation_aggregate_input_1.CategoriesOnPostsOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_order_by_relation_aggregate_input_1.CategoriesOnPostsOrderByRelationAggregateInput)
], PostOrderByWithRelationInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_order_by_relation_aggregate_input_1.LikeOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", like_order_by_relation_aggregate_input_1.LikeOrderByRelationAggregateInput)
], PostOrderByWithRelationInput.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_order_by_relation_aggregate_input_1.CommentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", comment_order_by_relation_aggregate_input_1.CommentOrderByRelationAggregateInput)
], PostOrderByWithRelationInput.prototype, "comments", void 0);
exports.PostOrderByWithRelationInput = PostOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], PostOrderByWithRelationInput);
//# sourceMappingURL=post-order-by-with-relation.input.js.map