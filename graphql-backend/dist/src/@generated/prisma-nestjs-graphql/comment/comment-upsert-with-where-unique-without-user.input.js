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
exports.CommentUpsertWithWhereUniqueWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const comment_where_unique_input_1 = require("./comment-where-unique.input");
const class_transformer_1 = require("class-transformer");
const comment_update_without_user_input_1 = require("./comment-update-without-user.input");
const comment_create_without_user_input_1 = require("./comment-create-without-user.input");
let CommentUpsertWithWhereUniqueWithoutUserInput = class CommentUpsertWithWhereUniqueWithoutUserInput {
};
exports.CommentUpsertWithWhereUniqueWithoutUserInput = CommentUpsertWithWhereUniqueWithoutUserInput;
__decorate([
    (0, graphql_1.Field)(() => comment_where_unique_input_1.CommentWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Object)
], CommentUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_update_without_user_input_1.CommentUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => comment_update_without_user_input_1.CommentUpdateWithoutUserInput),
    __metadata("design:type", comment_update_without_user_input_1.CommentUpdateWithoutUserInput)
], CommentUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_create_without_user_input_1.CommentCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => comment_create_without_user_input_1.CommentCreateWithoutUserInput),
    __metadata("design:type", comment_create_without_user_input_1.CommentCreateWithoutUserInput)
], CommentUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.CommentUpsertWithWhereUniqueWithoutUserInput = CommentUpsertWithWhereUniqueWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], CommentUpsertWithWhereUniqueWithoutUserInput);
//# sourceMappingURL=comment-upsert-with-where-unique-without-user.input.js.map