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
exports.FindFirstCategoriesOnPostsArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const categories_on_posts_where_input_1 = require("./categories-on-posts-where.input");
const class_transformer_1 = require("class-transformer");
const categories_on_posts_order_by_with_relation_input_1 = require("./categories-on-posts-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const categories_on_posts_where_unique_input_1 = require("./categories-on-posts-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const categories_on_posts_scalar_field_enum_1 = require("./categories-on-posts-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindFirstCategoriesOnPostsArgs = class FindFirstCategoriesOnPostsArgs {
};
exports.FindFirstCategoriesOnPostsArgs = FindFirstCategoriesOnPostsArgs;
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_where_input_1.CategoriesOnPostsWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_where_input_1.CategoriesOnPostsWhereInput),
    __metadata("design:type", categories_on_posts_where_input_1.CategoriesOnPostsWhereInput)
], FindFirstCategoriesOnPostsArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_order_by_with_relation_input_1.CategoriesOnPostsOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstCategoriesOnPostsArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], FindFirstCategoriesOnPostsArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstCategoriesOnPostsArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstCategoriesOnPostsArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_scalar_field_enum_1.CategoriesOnPostsScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstCategoriesOnPostsArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true }),
    __metadata("design:type", Object)
], FindFirstCategoriesOnPostsArgs.prototype, "relationLoadStrategy", void 0);
exports.FindFirstCategoriesOnPostsArgs = FindFirstCategoriesOnPostsArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstCategoriesOnPostsArgs);
//# sourceMappingURL=find-first-categories-on-posts.args.js.map