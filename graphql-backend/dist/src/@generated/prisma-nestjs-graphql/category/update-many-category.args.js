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
exports.UpdateManyCategoryArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const category_update_many_mutation_input_1 = require("./category-update-many-mutation.input");
const class_transformer_1 = require("class-transformer");
const category_where_input_1 = require("./category-where.input");
let UpdateManyCategoryArgs = class UpdateManyCategoryArgs {
};
exports.UpdateManyCategoryArgs = UpdateManyCategoryArgs;
__decorate([
    (0, graphql_1.Field)(() => category_update_many_mutation_input_1.CategoryUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => category_update_many_mutation_input_1.CategoryUpdateManyMutationInput),
    __metadata("design:type", category_update_many_mutation_input_1.CategoryUpdateManyMutationInput)
], UpdateManyCategoryArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_where_input_1.CategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => category_where_input_1.CategoryWhereInput),
    __metadata("design:type", category_where_input_1.CategoryWhereInput)
], UpdateManyCategoryArgs.prototype, "where", void 0);
exports.UpdateManyCategoryArgs = UpdateManyCategoryArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyCategoryArgs);
//# sourceMappingURL=update-many-category.args.js.map