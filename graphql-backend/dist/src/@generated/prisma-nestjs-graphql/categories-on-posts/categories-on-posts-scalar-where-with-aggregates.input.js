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
exports.CategoriesOnPostsScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let CategoriesOnPostsScalarWhereWithAggregatesInput = class CategoriesOnPostsScalarWhereWithAggregatesInput {
};
exports.CategoriesOnPostsScalarWhereWithAggregatesInput = CategoriesOnPostsScalarWhereWithAggregatesInput;
__decorate([
    (0, graphql_1.Field)(() => [CategoriesOnPostsScalarWhereWithAggregatesInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoriesOnPostsScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CategoriesOnPostsScalarWhereWithAggregatesInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoriesOnPostsScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CategoriesOnPostsScalarWhereWithAggregatesInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoriesOnPostsScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], CategoriesOnPostsScalarWhereWithAggregatesInput.prototype, "postId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], CategoriesOnPostsScalarWhereWithAggregatesInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], CategoriesOnPostsScalarWhereWithAggregatesInput.prototype, "assignedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], CategoriesOnPostsScalarWhereWithAggregatesInput.prototype, "assignedBy", void 0);
exports.CategoriesOnPostsScalarWhereWithAggregatesInput = CategoriesOnPostsScalarWhereWithAggregatesInput = __decorate([
    (0, graphql_2.InputType)()
], CategoriesOnPostsScalarWhereWithAggregatesInput);
//# sourceMappingURL=categories-on-posts-scalar-where-with-aggregates.input.js.map