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
exports.CategoriesOnPostsOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const categories_on_posts_count_order_by_aggregate_input_1 = require("./categories-on-posts-count-order-by-aggregate.input");
const categories_on_posts_max_order_by_aggregate_input_1 = require("./categories-on-posts-max-order-by-aggregate.input");
const categories_on_posts_min_order_by_aggregate_input_1 = require("./categories-on-posts-min-order-by-aggregate.input");
let CategoriesOnPostsOrderByWithAggregationInput = class CategoriesOnPostsOrderByWithAggregationInput {
};
exports.CategoriesOnPostsOrderByWithAggregationInput = CategoriesOnPostsOrderByWithAggregationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CategoriesOnPostsOrderByWithAggregationInput.prototype, "postId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CategoriesOnPostsOrderByWithAggregationInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CategoriesOnPostsOrderByWithAggregationInput.prototype, "assignedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CategoriesOnPostsOrderByWithAggregationInput.prototype, "assignedBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_count_order_by_aggregate_input_1.CategoriesOnPostsCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_count_order_by_aggregate_input_1.CategoriesOnPostsCountOrderByAggregateInput)
], CategoriesOnPostsOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_max_order_by_aggregate_input_1.CategoriesOnPostsMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_max_order_by_aggregate_input_1.CategoriesOnPostsMaxOrderByAggregateInput)
], CategoriesOnPostsOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_min_order_by_aggregate_input_1.CategoriesOnPostsMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_min_order_by_aggregate_input_1.CategoriesOnPostsMinOrderByAggregateInput)
], CategoriesOnPostsOrderByWithAggregationInput.prototype, "_min", void 0);
exports.CategoriesOnPostsOrderByWithAggregationInput = CategoriesOnPostsOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], CategoriesOnPostsOrderByWithAggregationInput);
//# sourceMappingURL=categories-on-posts-order-by-with-aggregation.input.js.map