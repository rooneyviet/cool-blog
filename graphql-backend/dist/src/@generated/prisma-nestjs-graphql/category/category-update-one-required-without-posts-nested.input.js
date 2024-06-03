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
exports.CategoryUpdateOneRequiredWithoutPostsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const category_create_without_posts_input_1 = require("./category-create-without-posts.input");
const class_transformer_1 = require("class-transformer");
const category_create_or_connect_without_posts_input_1 = require("./category-create-or-connect-without-posts.input");
const category_upsert_without_posts_input_1 = require("./category-upsert-without-posts.input");
const client_1 = require("@prisma/client");
const category_where_unique_input_1 = require("./category-where-unique.input");
const category_update_to_one_with_where_without_posts_input_1 = require("./category-update-to-one-with-where-without-posts.input");
let CategoryUpdateOneRequiredWithoutPostsNestedInput = class CategoryUpdateOneRequiredWithoutPostsNestedInput {
};
exports.CategoryUpdateOneRequiredWithoutPostsNestedInput = CategoryUpdateOneRequiredWithoutPostsNestedInput;
__decorate([
    (0, graphql_1.Field)(() => category_create_without_posts_input_1.CategoryCreateWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => category_create_without_posts_input_1.CategoryCreateWithoutPostsInput),
    __metadata("design:type", category_create_without_posts_input_1.CategoryCreateWithoutPostsInput)
], CategoryUpdateOneRequiredWithoutPostsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_create_or_connect_without_posts_input_1.CategoryCreateOrConnectWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => category_create_or_connect_without_posts_input_1.CategoryCreateOrConnectWithoutPostsInput),
    __metadata("design:type", category_create_or_connect_without_posts_input_1.CategoryCreateOrConnectWithoutPostsInput)
], CategoryUpdateOneRequiredWithoutPostsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_upsert_without_posts_input_1.CategoryUpsertWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => category_upsert_without_posts_input_1.CategoryUpsertWithoutPostsInput),
    __metadata("design:type", category_upsert_without_posts_input_1.CategoryUpsertWithoutPostsInput)
], CategoryUpdateOneRequiredWithoutPostsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_where_unique_input_1.CategoryWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => category_where_unique_input_1.CategoryWhereUniqueInput),
    __metadata("design:type", Object)
], CategoryUpdateOneRequiredWithoutPostsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_update_to_one_with_where_without_posts_input_1.CategoryUpdateToOneWithWhereWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => category_update_to_one_with_where_without_posts_input_1.CategoryUpdateToOneWithWhereWithoutPostsInput),
    __metadata("design:type", category_update_to_one_with_where_without_posts_input_1.CategoryUpdateToOneWithWhereWithoutPostsInput)
], CategoryUpdateOneRequiredWithoutPostsNestedInput.prototype, "update", void 0);
exports.CategoryUpdateOneRequiredWithoutPostsNestedInput = CategoryUpdateOneRequiredWithoutPostsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CategoryUpdateOneRequiredWithoutPostsNestedInput);
//# sourceMappingURL=category-update-one-required-without-posts-nested.input.js.map