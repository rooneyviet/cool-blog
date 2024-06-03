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
exports.CategoryGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const category_where_input_1 = require("./category-where.input");
const class_transformer_1 = require("class-transformer");
const category_order_by_with_aggregation_input_1 = require("./category-order-by-with-aggregation.input");
const category_scalar_field_enum_1 = require("./category-scalar-field.enum");
const category_scalar_where_with_aggregates_input_1 = require("./category-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const category_count_aggregate_input_1 = require("./category-count-aggregate.input");
const category_min_aggregate_input_1 = require("./category-min-aggregate.input");
const category_max_aggregate_input_1 = require("./category-max-aggregate.input");
let CategoryGroupByArgs = class CategoryGroupByArgs {
};
exports.CategoryGroupByArgs = CategoryGroupByArgs;
__decorate([
    (0, graphql_1.Field)(() => category_where_input_1.CategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => category_where_input_1.CategoryWhereInput),
    __metadata("design:type", category_where_input_1.CategoryWhereInput)
], CategoryGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_order_by_with_aggregation_input_1.CategoryOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoryGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_scalar_field_enum_1.CategoryScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], CategoryGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_scalar_where_with_aggregates_input_1.CategoryScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", category_scalar_where_with_aggregates_input_1.CategoryScalarWhereWithAggregatesInput)
], CategoryGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CategoryGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CategoryGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_count_aggregate_input_1.CategoryCountAggregateInput, { nullable: true }),
    __metadata("design:type", category_count_aggregate_input_1.CategoryCountAggregateInput)
], CategoryGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_min_aggregate_input_1.CategoryMinAggregateInput, { nullable: true }),
    __metadata("design:type", category_min_aggregate_input_1.CategoryMinAggregateInput)
], CategoryGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_max_aggregate_input_1.CategoryMaxAggregateInput, { nullable: true }),
    __metadata("design:type", category_max_aggregate_input_1.CategoryMaxAggregateInput)
], CategoryGroupByArgs.prototype, "_max", void 0);
exports.CategoryGroupByArgs = CategoryGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CategoryGroupByArgs);
//# sourceMappingURL=category-group-by.args.js.map