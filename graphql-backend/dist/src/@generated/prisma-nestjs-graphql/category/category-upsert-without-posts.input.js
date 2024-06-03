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
exports.CategoryUpsertWithoutPostsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const category_update_without_posts_input_1 = require("./category-update-without-posts.input");
const class_transformer_1 = require("class-transformer");
const category_create_without_posts_input_1 = require("./category-create-without-posts.input");
const category_where_input_1 = require("./category-where.input");
let CategoryUpsertWithoutPostsInput = class CategoryUpsertWithoutPostsInput {
};
exports.CategoryUpsertWithoutPostsInput = CategoryUpsertWithoutPostsInput;
__decorate([
    (0, graphql_1.Field)(() => category_update_without_posts_input_1.CategoryUpdateWithoutPostsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => category_update_without_posts_input_1.CategoryUpdateWithoutPostsInput),
    __metadata("design:type", category_update_without_posts_input_1.CategoryUpdateWithoutPostsInput)
], CategoryUpsertWithoutPostsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_create_without_posts_input_1.CategoryCreateWithoutPostsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => category_create_without_posts_input_1.CategoryCreateWithoutPostsInput),
    __metadata("design:type", category_create_without_posts_input_1.CategoryCreateWithoutPostsInput)
], CategoryUpsertWithoutPostsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_where_input_1.CategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => category_where_input_1.CategoryWhereInput),
    __metadata("design:type", category_where_input_1.CategoryWhereInput)
], CategoryUpsertWithoutPostsInput.prototype, "where", void 0);
exports.CategoryUpsertWithoutPostsInput = CategoryUpsertWithoutPostsInput = __decorate([
    (0, graphql_2.InputType)()
], CategoryUpsertWithoutPostsInput);
//# sourceMappingURL=category-upsert-without-posts.input.js.map