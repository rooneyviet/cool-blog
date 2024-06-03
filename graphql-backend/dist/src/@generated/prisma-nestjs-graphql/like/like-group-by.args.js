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
exports.LikeGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const like_where_input_1 = require("./like-where.input");
const class_transformer_1 = require("class-transformer");
const like_order_by_with_aggregation_input_1 = require("./like-order-by-with-aggregation.input");
const like_scalar_field_enum_1 = require("./like-scalar-field.enum");
const like_scalar_where_with_aggregates_input_1 = require("./like-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const like_count_aggregate_input_1 = require("./like-count-aggregate.input");
const like_min_aggregate_input_1 = require("./like-min-aggregate.input");
const like_max_aggregate_input_1 = require("./like-max-aggregate.input");
let LikeGroupByArgs = class LikeGroupByArgs {
};
exports.LikeGroupByArgs = LikeGroupByArgs;
__decorate([
    (0, graphql_1.Field)(() => like_where_input_1.LikeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => like_where_input_1.LikeWhereInput),
    __metadata("design:type", like_where_input_1.LikeWhereInput)
], LikeGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_order_by_with_aggregation_input_1.LikeOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], LikeGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_scalar_field_enum_1.LikeScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], LikeGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_scalar_where_with_aggregates_input_1.LikeScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", like_scalar_where_with_aggregates_input_1.LikeScalarWhereWithAggregatesInput)
], LikeGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LikeGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LikeGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_count_aggregate_input_1.LikeCountAggregateInput, { nullable: true }),
    __metadata("design:type", like_count_aggregate_input_1.LikeCountAggregateInput)
], LikeGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_min_aggregate_input_1.LikeMinAggregateInput, { nullable: true }),
    __metadata("design:type", like_min_aggregate_input_1.LikeMinAggregateInput)
], LikeGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_max_aggregate_input_1.LikeMaxAggregateInput, { nullable: true }),
    __metadata("design:type", like_max_aggregate_input_1.LikeMaxAggregateInput)
], LikeGroupByArgs.prototype, "_max", void 0);
exports.LikeGroupByArgs = LikeGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], LikeGroupByArgs);
//# sourceMappingURL=like-group-by.args.js.map