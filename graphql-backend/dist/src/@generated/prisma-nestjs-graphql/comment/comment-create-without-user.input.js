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
exports.CommentCreateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_create_nested_one_without_comments_input_1 = require("../post/post-create-nested-one-without-comments.input");
let CommentCreateWithoutUserInput = class CommentCreateWithoutUserInput {
};
exports.CommentCreateWithoutUserInput = CommentCreateWithoutUserInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentCreateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentCreateWithoutUserInput.prototype, "text", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CommentCreateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CommentCreateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_create_nested_one_without_comments_input_1.PostCreateNestedOneWithoutCommentsInput, { nullable: false }),
    __metadata("design:type", post_create_nested_one_without_comments_input_1.PostCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutUserInput.prototype, "post", void 0);
exports.CommentCreateWithoutUserInput = CommentCreateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], CommentCreateWithoutUserInput);
//# sourceMappingURL=comment-create-without-user.input.js.map