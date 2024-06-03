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
exports.CategoriesOnPostsWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const post_relation_filter_input_1 = require("../post/post-relation-filter.input");
const category_relation_filter_input_1 = require("../category/category-relation-filter.input");
let CategoriesOnPostsWhereInput = class CategoriesOnPostsWhereInput {
};
exports.CategoriesOnPostsWhereInput = CategoriesOnPostsWhereInput;
__decorate([
    (0, graphql_1.Field)(() => [CategoriesOnPostsWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoriesOnPostsWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CategoriesOnPostsWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoriesOnPostsWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CategoriesOnPostsWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoriesOnPostsWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CategoriesOnPostsWhereInput.prototype, "postId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CategoriesOnPostsWhereInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CategoriesOnPostsWhereInput.prototype, "assignedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CategoriesOnPostsWhereInput.prototype, "assignedBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_relation_filter_input_1.PostRelationFilter, { nullable: true }),
    __metadata("design:type", post_relation_filter_input_1.PostRelationFilter)
], CategoriesOnPostsWhereInput.prototype, "post", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_relation_filter_input_1.CategoryRelationFilter, { nullable: true }),
    __metadata("design:type", category_relation_filter_input_1.CategoryRelationFilter)
], CategoriesOnPostsWhereInput.prototype, "category", void 0);
exports.CategoriesOnPostsWhereInput = CategoriesOnPostsWhereInput = __decorate([
    (0, graphql_2.InputType)()
], CategoriesOnPostsWhereInput);
//# sourceMappingURL=categories-on-posts-where.input.js.map