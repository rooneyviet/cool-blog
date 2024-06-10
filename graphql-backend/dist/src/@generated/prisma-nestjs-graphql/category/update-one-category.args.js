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
exports.UpdateOneCategoryArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const category_update_input_1 = require("./category-update.input");
const class_transformer_1 = require("class-transformer");
const client_1 = require("@prisma/client");
const category_where_unique_input_1 = require("./category-where-unique.input");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let UpdateOneCategoryArgs = class UpdateOneCategoryArgs {
};
exports.UpdateOneCategoryArgs = UpdateOneCategoryArgs;
__decorate([
    (0, graphql_1.Field)(() => category_update_input_1.CategoryUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => category_update_input_1.CategoryUpdateInput),
    __metadata("design:type", category_update_input_1.CategoryUpdateInput)
], UpdateOneCategoryArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_where_unique_input_1.CategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => category_where_unique_input_1.CategoryWhereUniqueInput),
    __metadata("design:type", Object)
], UpdateOneCategoryArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true }),
    __metadata("design:type", Object)
], UpdateOneCategoryArgs.prototype, "relationLoadStrategy", void 0);
exports.UpdateOneCategoryArgs = UpdateOneCategoryArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneCategoryArgs);
//# sourceMappingURL=update-one-category.args.js.map