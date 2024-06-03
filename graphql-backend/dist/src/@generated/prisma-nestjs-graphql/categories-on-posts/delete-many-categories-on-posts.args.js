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
exports.DeleteManyCategoriesOnPostsArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const categories_on_posts_where_input_1 = require("./categories-on-posts-where.input");
const class_transformer_1 = require("class-transformer");
let DeleteManyCategoriesOnPostsArgs = class DeleteManyCategoriesOnPostsArgs {
};
exports.DeleteManyCategoriesOnPostsArgs = DeleteManyCategoriesOnPostsArgs;
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_where_input_1.CategoriesOnPostsWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_where_input_1.CategoriesOnPostsWhereInput),
    __metadata("design:type", categories_on_posts_where_input_1.CategoriesOnPostsWhereInput)
], DeleteManyCategoriesOnPostsArgs.prototype, "where", void 0);
exports.DeleteManyCategoriesOnPostsArgs = DeleteManyCategoriesOnPostsArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteManyCategoriesOnPostsArgs);
//# sourceMappingURL=delete-many-categories-on-posts.args.js.map