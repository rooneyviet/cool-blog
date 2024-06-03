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
exports.PostGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_input_1 = require("./post-where.input");
const class_transformer_1 = require("class-transformer");
const post_order_by_with_aggregation_input_1 = require("./post-order-by-with-aggregation.input");
const post_scalar_field_enum_1 = require("./post-scalar-field.enum");
const post_scalar_where_with_aggregates_input_1 = require("./post-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const post_count_aggregate_input_1 = require("./post-count-aggregate.input");
const post_avg_aggregate_input_1 = require("./post-avg-aggregate.input");
const post_sum_aggregate_input_1 = require("./post-sum-aggregate.input");
const post_min_aggregate_input_1 = require("./post-min-aggregate.input");
const post_max_aggregate_input_1 = require("./post-max-aggregate.input");
let PostGroupByArgs = class PostGroupByArgs {
};
exports.PostGroupByArgs = PostGroupByArgs;
__decorate([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_input_1.PostWhereInput),
    __metadata("design:type", post_where_input_1.PostWhereInput)
], PostGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_order_by_with_aggregation_input_1.PostOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], PostGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_scalar_field_enum_1.PostScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], PostGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_scalar_where_with_aggregates_input_1.PostScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", post_scalar_where_with_aggregates_input_1.PostScalarWhereWithAggregatesInput)
], PostGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PostGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PostGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_count_aggregate_input_1.PostCountAggregateInput, { nullable: true }),
    __metadata("design:type", post_count_aggregate_input_1.PostCountAggregateInput)
], PostGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_avg_aggregate_input_1.PostAvgAggregateInput, { nullable: true }),
    __metadata("design:type", post_avg_aggregate_input_1.PostAvgAggregateInput)
], PostGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_sum_aggregate_input_1.PostSumAggregateInput, { nullable: true }),
    __metadata("design:type", post_sum_aggregate_input_1.PostSumAggregateInput)
], PostGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_min_aggregate_input_1.PostMinAggregateInput, { nullable: true }),
    __metadata("design:type", post_min_aggregate_input_1.PostMinAggregateInput)
], PostGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_max_aggregate_input_1.PostMaxAggregateInput, { nullable: true }),
    __metadata("design:type", post_max_aggregate_input_1.PostMaxAggregateInput)
], PostGroupByArgs.prototype, "_max", void 0);
exports.PostGroupByArgs = PostGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], PostGroupByArgs);
//# sourceMappingURL=post-group-by.args.js.map