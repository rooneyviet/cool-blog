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
exports.CategoriesOnPostsOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const post_order_by_with_relation_input_1 = require("../post/post-order-by-with-relation.input");
const category_order_by_with_relation_input_1 = require("../category/category-order-by-with-relation.input");
let CategoriesOnPostsOrderByWithRelationInput = class CategoriesOnPostsOrderByWithRelationInput {
};
exports.CategoriesOnPostsOrderByWithRelationInput = CategoriesOnPostsOrderByWithRelationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CategoriesOnPostsOrderByWithRelationInput.prototype, "postId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CategoriesOnPostsOrderByWithRelationInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CategoriesOnPostsOrderByWithRelationInput.prototype, "assignedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CategoriesOnPostsOrderByWithRelationInput.prototype, "assignedBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_order_by_with_relation_input_1.PostOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", post_order_by_with_relation_input_1.PostOrderByWithRelationInput)
], CategoriesOnPostsOrderByWithRelationInput.prototype, "post", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_order_by_with_relation_input_1.CategoryOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", category_order_by_with_relation_input_1.CategoryOrderByWithRelationInput)
], CategoriesOnPostsOrderByWithRelationInput.prototype, "category", void 0);
exports.CategoriesOnPostsOrderByWithRelationInput = CategoriesOnPostsOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], CategoriesOnPostsOrderByWithRelationInput);
//# sourceMappingURL=categories-on-posts-order-by-with-relation.input.js.map