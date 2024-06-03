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
exports.CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const categories_on_posts_scalar_where_input_1 = require("./categories-on-posts-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const categories_on_posts_update_many_mutation_input_1 = require("./categories-on-posts-update-many-mutation.input");
let CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput = class CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput {
};
exports.CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput = CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput;
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_scalar_where_input_1.CategoriesOnPostsScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => categories_on_posts_scalar_where_input_1.CategoriesOnPostsScalarWhereInput),
    __metadata("design:type", categories_on_posts_scalar_where_input_1.CategoriesOnPostsScalarWhereInput)
], CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_update_many_mutation_input_1.CategoriesOnPostsUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => categories_on_posts_update_many_mutation_input_1.CategoriesOnPostsUpdateManyMutationInput),
    __metadata("design:type", categories_on_posts_update_many_mutation_input_1.CategoriesOnPostsUpdateManyMutationInput)
], CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput.prototype, "data", void 0);
exports.CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput = CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput = __decorate([
    (0, graphql_2.InputType)()
], CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput);
//# sourceMappingURL=categories-on-posts-update-many-with-where-without-category.input.js.map