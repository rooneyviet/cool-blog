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
exports.PostUpsertWithoutCommentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_update_without_comments_input_1 = require("./post-update-without-comments.input");
const class_transformer_1 = require("class-transformer");
const post_create_without_comments_input_1 = require("./post-create-without-comments.input");
const post_where_input_1 = require("./post-where.input");
let PostUpsertWithoutCommentsInput = class PostUpsertWithoutCommentsInput {
};
exports.PostUpsertWithoutCommentsInput = PostUpsertWithoutCommentsInput;
__decorate([
    (0, graphql_1.Field)(() => post_update_without_comments_input_1.PostUpdateWithoutCommentsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => post_update_without_comments_input_1.PostUpdateWithoutCommentsInput),
    __metadata("design:type", post_update_without_comments_input_1.PostUpdateWithoutCommentsInput)
], PostUpsertWithoutCommentsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_create_without_comments_input_1.PostCreateWithoutCommentsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => post_create_without_comments_input_1.PostCreateWithoutCommentsInput),
    __metadata("design:type", post_create_without_comments_input_1.PostCreateWithoutCommentsInput)
], PostUpsertWithoutCommentsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_input_1.PostWhereInput),
    __metadata("design:type", post_where_input_1.PostWhereInput)
], PostUpsertWithoutCommentsInput.prototype, "where", void 0);
exports.PostUpsertWithoutCommentsInput = PostUpsertWithoutCommentsInput = __decorate([
    (0, graphql_2.InputType)()
], PostUpsertWithoutCommentsInput);
//# sourceMappingURL=post-upsert-without-comments.input.js.map