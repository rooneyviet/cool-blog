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
exports.AggregateCategoriesOnPosts = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const categories_on_posts_count_aggregate_output_1 = require("./categories-on-posts-count-aggregate.output");
const categories_on_posts_min_aggregate_output_1 = require("./categories-on-posts-min-aggregate.output");
const categories_on_posts_max_aggregate_output_1 = require("./categories-on-posts-max-aggregate.output");
let AggregateCategoriesOnPosts = class AggregateCategoriesOnPosts {
};
exports.AggregateCategoriesOnPosts = AggregateCategoriesOnPosts;
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_count_aggregate_output_1.CategoriesOnPostsCountAggregate, { nullable: true }),
    __metadata("design:type", categories_on_posts_count_aggregate_output_1.CategoriesOnPostsCountAggregate)
], AggregateCategoriesOnPosts.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_min_aggregate_output_1.CategoriesOnPostsMinAggregate, { nullable: true }),
    __metadata("design:type", categories_on_posts_min_aggregate_output_1.CategoriesOnPostsMinAggregate)
], AggregateCategoriesOnPosts.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_max_aggregate_output_1.CategoriesOnPostsMaxAggregate, { nullable: true }),
    __metadata("design:type", categories_on_posts_max_aggregate_output_1.CategoriesOnPostsMaxAggregate)
], AggregateCategoriesOnPosts.prototype, "_max", void 0);
exports.AggregateCategoriesOnPosts = AggregateCategoriesOnPosts = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateCategoriesOnPosts);
//# sourceMappingURL=aggregate-categories-on-posts.output.js.map