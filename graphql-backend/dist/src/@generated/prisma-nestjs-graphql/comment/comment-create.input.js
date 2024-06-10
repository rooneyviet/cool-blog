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
exports.CommentCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_create_nested_one_without_comments_input_1 = require("../post/post-create-nested-one-without-comments.input");
const user_create_nested_one_without_comments_input_1 = require("../user/user-create-nested-one-without-comments.input");
let CommentCreateInput = class CommentCreateInput {
};
exports.CommentCreateInput = CommentCreateInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentCreateInput.prototype, "text", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CommentCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CommentCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_create_nested_one_without_comments_input_1.PostCreateNestedOneWithoutCommentsInput, { nullable: false }),
    __metadata("design:type", post_create_nested_one_without_comments_input_1.PostCreateNestedOneWithoutCommentsInput)
], CommentCreateInput.prototype, "post", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_comments_input_1.UserCreateNestedOneWithoutCommentsInput, { nullable: false }),
    __metadata("design:type", user_create_nested_one_without_comments_input_1.UserCreateNestedOneWithoutCommentsInput)
], CommentCreateInput.prototype, "user", void 0);
exports.CommentCreateInput = CommentCreateInput = __decorate([
    (0, graphql_2.InputType)()
], CommentCreateInput);
//# sourceMappingURL=comment-create.input.js.map