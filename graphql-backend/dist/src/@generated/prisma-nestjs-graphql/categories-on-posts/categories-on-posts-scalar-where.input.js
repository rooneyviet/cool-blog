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
exports.CategoriesOnPostsScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let CategoriesOnPostsScalarWhereInput = class CategoriesOnPostsScalarWhereInput {
};
exports.CategoriesOnPostsScalarWhereInput = CategoriesOnPostsScalarWhereInput;
__decorate([
    (0, graphql_1.Field)(() => [CategoriesOnPostsScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoriesOnPostsScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CategoriesOnPostsScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoriesOnPostsScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CategoriesOnPostsScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoriesOnPostsScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CategoriesOnPostsScalarWhereInput.prototype, "postId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CategoriesOnPostsScalarWhereInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CategoriesOnPostsScalarWhereInput.prototype, "assignedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CategoriesOnPostsScalarWhereInput.prototype, "assignedBy", void 0);
exports.CategoriesOnPostsScalarWhereInput = CategoriesOnPostsScalarWhereInput = __decorate([
    (0, graphql_2.InputType)()
], CategoriesOnPostsScalarWhereInput);
//# sourceMappingURL=categories-on-posts-scalar-where.input.js.map