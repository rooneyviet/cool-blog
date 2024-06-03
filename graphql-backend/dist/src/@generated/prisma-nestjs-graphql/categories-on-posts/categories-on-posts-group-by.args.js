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
exports.CategoriesOnPostsGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const categories_on_posts_where_input_1 = require("./categories-on-posts-where.input");
const class_transformer_1 = require("class-transformer");
const categories_on_posts_order_by_with_aggregation_input_1 = require("./categories-on-posts-order-by-with-aggregation.input");
const categories_on_posts_scalar_field_enum_1 = require("./categories-on-posts-scalar-field.enum");
const categories_on_posts_scalar_where_with_aggregates_input_1 = require("./categories-on-posts-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const categories_on_posts_count_aggregate_input_1 = require("./categories-on-posts-count-aggregate.input");
const categories_on_posts_min_aggregate_input_1 = require("./categories-on-posts-min-aggregate.input");
const categories_on_posts_max_aggregate_input_1 = require("./categories-on-posts-max-aggregate.input");
let CategoriesOnPostsGroupByArgs = class CategoriesOnPostsGroupByArgs {
};
exports.CategoriesOnPostsGroupByArgs = CategoriesOnPostsGroupByArgs;
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_where_input_1.CategoriesOnPostsWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_where_input_1.CategoriesOnPostsWhereInput),
    __metadata("design:type", categories_on_posts_where_input_1.CategoriesOnPostsWhereInput)
], CategoriesOnPostsGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_order_by_with_aggregation_input_1.CategoriesOnPostsOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoriesOnPostsGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_scalar_field_enum_1.CategoriesOnPostsScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], CategoriesOnPostsGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_scalar_where_with_aggregates_input_1.CategoriesOnPostsScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_scalar_where_with_aggregates_input_1.CategoriesOnPostsScalarWhereWithAggregatesInput)
], CategoriesOnPostsGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CategoriesOnPostsGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CategoriesOnPostsGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_count_aggregate_input_1.CategoriesOnPostsCountAggregateInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_count_aggregate_input_1.CategoriesOnPostsCountAggregateInput)
], CategoriesOnPostsGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_min_aggregate_input_1.CategoriesOnPostsMinAggregateInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_min_aggregate_input_1.CategoriesOnPostsMinAggregateInput)
], CategoriesOnPostsGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_max_aggregate_input_1.CategoriesOnPostsMaxAggregateInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_max_aggregate_input_1.CategoriesOnPostsMaxAggregateInput)
], CategoriesOnPostsGroupByArgs.prototype, "_max", void 0);
exports.CategoriesOnPostsGroupByArgs = CategoriesOnPostsGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CategoriesOnPostsGroupByArgs);
//# sourceMappingURL=categories-on-posts-group-by.args.js.map