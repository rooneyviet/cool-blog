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
exports.LikeCreateOrConnectWithoutPostInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const like_where_unique_input_1 = require("./like-where-unique.input");
const class_transformer_1 = require("class-transformer");
const like_create_without_post_input_1 = require("./like-create-without-post.input");
let LikeCreateOrConnectWithoutPostInput = class LikeCreateOrConnectWithoutPostInput {
};
exports.LikeCreateOrConnectWithoutPostInput = LikeCreateOrConnectWithoutPostInput;
__decorate([
    (0, graphql_1.Field)(() => like_where_unique_input_1.LikeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => like_where_unique_input_1.LikeWhereUniqueInput),
    __metadata("design:type", Object)
], LikeCreateOrConnectWithoutPostInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_create_without_post_input_1.LikeCreateWithoutPostInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => like_create_without_post_input_1.LikeCreateWithoutPostInput),
    __metadata("design:type", like_create_without_post_input_1.LikeCreateWithoutPostInput)
], LikeCreateOrConnectWithoutPostInput.prototype, "create", void 0);
exports.LikeCreateOrConnectWithoutPostInput = LikeCreateOrConnectWithoutPostInput = __decorate([
    (0, graphql_2.InputType)()
], LikeCreateOrConnectWithoutPostInput);
//# sourceMappingURL=like-create-or-connect-without-post.input.js.map