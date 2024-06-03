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
exports.CategoriesOnPostsCreateOrConnectWithoutPostInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const categories_on_posts_where_unique_input_1 = require("./categories-on-posts-where-unique.input");
const class_transformer_1 = require("class-transformer");
const categories_on_posts_create_without_post_input_1 = require("./categories-on-posts-create-without-post.input");
let CategoriesOnPostsCreateOrConnectWithoutPostInput = class CategoriesOnPostsCreateOrConnectWithoutPostInput {
};
exports.CategoriesOnPostsCreateOrConnectWithoutPostInput = CategoriesOnPostsCreateOrConnectWithoutPostInput;
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput),
    __metadata("design:type", Object)
], CategoriesOnPostsCreateOrConnectWithoutPostInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_create_without_post_input_1.CategoriesOnPostsCreateWithoutPostInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => categories_on_posts_create_without_post_input_1.CategoriesOnPostsCreateWithoutPostInput),
    __metadata("design:type", categories_on_posts_create_without_post_input_1.CategoriesOnPostsCreateWithoutPostInput)
], CategoriesOnPostsCreateOrConnectWithoutPostInput.prototype, "create", void 0);
exports.CategoriesOnPostsCreateOrConnectWithoutPostInput = CategoriesOnPostsCreateOrConnectWithoutPostInput = __decorate([
    (0, graphql_2.InputType)()
], CategoriesOnPostsCreateOrConnectWithoutPostInput);
//# sourceMappingURL=categories-on-posts-create-or-connect-without-post.input.js.map