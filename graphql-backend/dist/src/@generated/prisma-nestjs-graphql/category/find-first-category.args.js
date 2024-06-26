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
exports.FindFirstCategoryArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const category_where_input_1 = require("./category-where.input");
const class_transformer_1 = require("class-transformer");
const category_order_by_with_relation_input_1 = require("./category-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const category_where_unique_input_1 = require("./category-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const category_scalar_field_enum_1 = require("./category-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindFirstCategoryArgs = class FindFirstCategoryArgs {
};
exports.FindFirstCategoryArgs = FindFirstCategoryArgs;
__decorate([
    (0, graphql_1.Field)(() => category_where_input_1.CategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => category_where_input_1.CategoryWhereInput),
    __metadata("design:type", category_where_input_1.CategoryWhereInput)
], FindFirstCategoryArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_order_by_with_relation_input_1.CategoryOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstCategoryArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_where_unique_input_1.CategoryWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], FindFirstCategoryArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstCategoryArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstCategoryArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_scalar_field_enum_1.CategoryScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstCategoryArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true }),
    __metadata("design:type", Object)
], FindFirstCategoryArgs.prototype, "relationLoadStrategy", void 0);
exports.FindFirstCategoryArgs = FindFirstCategoryArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstCategoryArgs);
//# sourceMappingURL=find-first-category.args.js.map