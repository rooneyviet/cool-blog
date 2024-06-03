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
exports.CategoriesOnPostsAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const categories_on_posts_where_input_1 = require("./categories-on-posts-where.input");
const class_transformer_1 = require("class-transformer");
const categories_on_posts_order_by_with_relation_input_1 = require("./categories-on-posts-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const categories_on_posts_where_unique_input_1 = require("./categories-on-posts-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const categories_on_posts_count_aggregate_input_1 = require("./categories-on-posts-count-aggregate.input");
const categories_on_posts_min_aggregate_input_1 = require("./categories-on-posts-min-aggregate.input");
const categories_on_posts_max_aggregate_input_1 = require("./categories-on-posts-max-aggregate.input");
let CategoriesOnPostsAggregateArgs = class CategoriesOnPostsAggregateArgs {
};
exports.CategoriesOnPostsAggregateArgs = CategoriesOnPostsAggregateArgs;
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_where_input_1.CategoriesOnPostsWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_where_input_1.CategoriesOnPostsWhereInput),
    __metadata("design:type", categories_on_posts_where_input_1.CategoriesOnPostsWhereInput)
], CategoriesOnPostsAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_order_by_with_relation_input_1.CategoriesOnPostsOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoriesOnPostsAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], CategoriesOnPostsAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CategoriesOnPostsAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CategoriesOnPostsAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_count_aggregate_input_1.CategoriesOnPostsCountAggregateInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_count_aggregate_input_1.CategoriesOnPostsCountAggregateInput)
], CategoriesOnPostsAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_min_aggregate_input_1.CategoriesOnPostsMinAggregateInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_min_aggregate_input_1.CategoriesOnPostsMinAggregateInput)
], CategoriesOnPostsAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_max_aggregate_input_1.CategoriesOnPostsMaxAggregateInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_max_aggregate_input_1.CategoriesOnPostsMaxAggregateInput)
], CategoriesOnPostsAggregateArgs.prototype, "_max", void 0);
exports.CategoriesOnPostsAggregateArgs = CategoriesOnPostsAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CategoriesOnPostsAggregateArgs);
//# sourceMappingURL=categories-on-posts-aggregate.args.js.map