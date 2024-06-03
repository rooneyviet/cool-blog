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
exports.CategoryWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const categories_on_posts_list_relation_filter_input_1 = require("../categories-on-posts/categories-on-posts-list-relation-filter.input");
let CategoryWhereInput = class CategoryWhereInput {
};
exports.CategoryWhereInput = CategoryWhereInput;
__decorate([
    (0, graphql_1.Field)(() => [CategoryWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoryWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CategoryWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoryWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CategoryWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoryWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CategoryWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CategoryWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CategoryWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_list_relation_filter_input_1.CategoriesOnPostsListRelationFilter, { nullable: true }),
    __metadata("design:type", categories_on_posts_list_relation_filter_input_1.CategoriesOnPostsListRelationFilter)
], CategoryWhereInput.prototype, "posts", void 0);
exports.CategoryWhereInput = CategoryWhereInput = __decorate([
    (0, graphql_2.InputType)()
], CategoryWhereInput);
//# sourceMappingURL=category-where.input.js.map