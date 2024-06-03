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
exports.PostCreateOrConnectWithoutCommentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const post_where_unique_input_1 = require("./post-where-unique.input");
const class_transformer_1 = require("class-transformer");
const post_create_without_comments_input_1 = require("./post-create-without-comments.input");
let PostCreateOrConnectWithoutCommentsInput = class PostCreateOrConnectWithoutCommentsInput {
};
exports.PostCreateOrConnectWithoutCommentsInput = PostCreateOrConnectWithoutCommentsInput;
__decorate([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => post_where_unique_input_1.PostWhereUniqueInput),
    __metadata("design:type", Object)
], PostCreateOrConnectWithoutCommentsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_create_without_comments_input_1.PostCreateWithoutCommentsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => post_create_without_comments_input_1.PostCreateWithoutCommentsInput),
    __metadata("design:type", post_create_without_comments_input_1.PostCreateWithoutCommentsInput)
], PostCreateOrConnectWithoutCommentsInput.prototype, "create", void 0);
exports.PostCreateOrConnectWithoutCommentsInput = PostCreateOrConnectWithoutCommentsInput = __decorate([
    (0, graphql_2.InputType)()
], PostCreateOrConnectWithoutCommentsInput);
//# sourceMappingURL=post-create-or-connect-without-comments.input.js.map