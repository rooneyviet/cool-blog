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
exports.CategoryOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const category_count_order_by_aggregate_input_1 = require("./category-count-order-by-aggregate.input");
const category_max_order_by_aggregate_input_1 = require("./category-max-order-by-aggregate.input");
const category_min_order_by_aggregate_input_1 = require("./category-min-order-by-aggregate.input");
let CategoryOrderByWithAggregationInput = class CategoryOrderByWithAggregationInput {
};
exports.CategoryOrderByWithAggregationInput = CategoryOrderByWithAggregationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CategoryOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CategoryOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CategoryOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_count_order_by_aggregate_input_1.CategoryCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", category_count_order_by_aggregate_input_1.CategoryCountOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_max_order_by_aggregate_input_1.CategoryMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", category_max_order_by_aggregate_input_1.CategoryMaxOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_min_order_by_aggregate_input_1.CategoryMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", category_min_order_by_aggregate_input_1.CategoryMinOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_min", void 0);
exports.CategoryOrderByWithAggregationInput = CategoryOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], CategoryOrderByWithAggregationInput);
//# sourceMappingURL=category-order-by-with-aggregation.input.js.map