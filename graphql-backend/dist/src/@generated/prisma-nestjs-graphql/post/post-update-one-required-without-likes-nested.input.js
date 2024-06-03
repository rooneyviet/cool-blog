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
exports.PostUpdateOneRequiredWithoutLikesNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_create_without_likes_input_1 = require("./post-create-without-likes.input");
const class_transformer_1 = require("class-transformer");
const post_create_or_connect_without_likes_input_1 = require("./post-create-or-connect-without-likes.input");
const post_upsert_without_likes_input_1 = require("./post-upsert-without-likes.input");
const client_1 = require("@prisma/client");
const post_where_unique_input_1 = require("./post-where-unique.input");
const post_update_to_one_with_where_without_likes_input_1 = require("./post-update-to-one-with-where-without-likes.input");
let PostUpdateOneRequiredWithoutLikesNestedInput = class PostUpdateOneRequiredWithoutLikesNestedInput {
};
exports.PostUpdateOneRequiredWithoutLikesNestedInput = PostUpdateOneRequiredWithoutLikesNestedInput;
__decorate([
    (0, graphql_1.Field)(() => post_create_without_likes_input_1.PostCreateWithoutLikesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_create_without_likes_input_1.PostCreateWithoutLikesInput),
    __metadata("design:type", post_create_without_likes_input_1.PostCreateWithoutLikesInput)
], PostUpdateOneRequiredWithoutLikesNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_create_or_connect_without_likes_input_1.PostCreateOrConnectWithoutLikesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_create_or_connect_without_likes_input_1.PostCreateOrConnectWithoutLikesInput),
    __metadata("design:type", post_create_or_connect_without_likes_input_1.PostCreateOrConnectWithoutLikesInput)
], PostUpdateOneRequiredWithoutLikesNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_upsert_without_likes_input_1.PostUpsertWithoutLikesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_upsert_without_likes_input_1.PostUpsertWithoutLikesInput),
    __metadata("design:type", post_upsert_without_likes_input_1.PostUpsertWithoutLikesInput)
], PostUpdateOneRequiredWithoutLikesNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_unique_input_1.PostWhereUniqueInput),
    __metadata("design:type", Object)
], PostUpdateOneRequiredWithoutLikesNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_update_to_one_with_where_without_likes_input_1.PostUpdateToOneWithWhereWithoutLikesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_update_to_one_with_where_without_likes_input_1.PostUpdateToOneWithWhereWithoutLikesInput),
    __metadata("design:type", post_update_to_one_with_where_without_likes_input_1.PostUpdateToOneWithWhereWithoutLikesInput)
], PostUpdateOneRequiredWithoutLikesNestedInput.prototype, "update", void 0);
exports.PostUpdateOneRequiredWithoutLikesNestedInput = PostUpdateOneRequiredWithoutLikesNestedInput = __decorate([
    (0, graphql_2.InputType)()
], PostUpdateOneRequiredWithoutLikesNestedInput);
//# sourceMappingURL=post-update-one-required-without-likes-nested.input.js.map