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
exports.CategoriesOnPostsCreateNestedManyWithoutCategoryInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const categories_on_posts_create_without_category_input_1 = require("./categories-on-posts-create-without-category.input");
const class_transformer_1 = require("class-transformer");
const categories_on_posts_create_or_connect_without_category_input_1 = require("./categories-on-posts-create-or-connect-without-category.input");
const categories_on_posts_create_many_category_input_envelope_input_1 = require("./categories-on-posts-create-many-category-input-envelope.input");
const categories_on_posts_where_unique_input_1 = require("./categories-on-posts-where-unique.input");
let CategoriesOnPostsCreateNestedManyWithoutCategoryInput = class CategoriesOnPostsCreateNestedManyWithoutCategoryInput {
};
exports.CategoriesOnPostsCreateNestedManyWithoutCategoryInput = CategoriesOnPostsCreateNestedManyWithoutCategoryInput;
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_create_without_category_input_1.CategoriesOnPostsCreateWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_create_without_category_input_1.CategoriesOnPostsCreateWithoutCategoryInput),
    __metadata("design:type", Array)
], CategoriesOnPostsCreateNestedManyWithoutCategoryInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_create_or_connect_without_category_input_1.CategoriesOnPostsCreateOrConnectWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_create_or_connect_without_category_input_1.CategoriesOnPostsCreateOrConnectWithoutCategoryInput),
    __metadata("design:type", Array)
], CategoriesOnPostsCreateNestedManyWithoutCategoryInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_create_many_category_input_envelope_input_1.CategoriesOnPostsCreateManyCategoryInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_create_many_category_input_envelope_input_1.CategoriesOnPostsCreateManyCategoryInputEnvelope),
    __metadata("design:type", categories_on_posts_create_many_category_input_envelope_input_1.CategoriesOnPostsCreateManyCategoryInputEnvelope)
], CategoriesOnPostsCreateNestedManyWithoutCategoryInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput),
    __metadata("design:type", Array)
], CategoriesOnPostsCreateNestedManyWithoutCategoryInput.prototype, "connect", void 0);
exports.CategoriesOnPostsCreateNestedManyWithoutCategoryInput = CategoriesOnPostsCreateNestedManyWithoutCategoryInput = __decorate([
    (0, graphql_2.InputType)()
], CategoriesOnPostsCreateNestedManyWithoutCategoryInput);
//# sourceMappingURL=categories-on-posts-create-nested-many-without-category.input.js.map