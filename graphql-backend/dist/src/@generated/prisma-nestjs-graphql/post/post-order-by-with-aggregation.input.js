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
exports.PostOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const post_count_order_by_aggregate_input_1 = require("./post-count-order-by-aggregate.input");
const post_avg_order_by_aggregate_input_1 = require("./post-avg-order-by-aggregate.input");
const post_max_order_by_aggregate_input_1 = require("./post-max-order-by-aggregate.input");
const post_min_order_by_aggregate_input_1 = require("./post-min-order-by-aggregate.input");
const post_sum_order_by_aggregate_input_1 = require("./post-sum-order-by-aggregate.input");
let PostOrderByWithAggregationInput = class PostOrderByWithAggregationInput {
};
exports.PostOrderByWithAggregationInput = PostOrderByWithAggregationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], PostOrderByWithAggregationInput.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], PostOrderByWithAggregationInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_count_order_by_aggregate_input_1.PostCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", post_count_order_by_aggregate_input_1.PostCountOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_avg_order_by_aggregate_input_1.PostAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", post_avg_order_by_aggregate_input_1.PostAvgOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_max_order_by_aggregate_input_1.PostMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", post_max_order_by_aggregate_input_1.PostMaxOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_min_order_by_aggregate_input_1.PostMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", post_min_order_by_aggregate_input_1.PostMinOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_sum_order_by_aggregate_input_1.PostSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", post_sum_order_by_aggregate_input_1.PostSumOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.PostOrderByWithAggregationInput = PostOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], PostOrderByWithAggregationInput);
//# sourceMappingURL=post-order-by-with-aggregation.input.js.map