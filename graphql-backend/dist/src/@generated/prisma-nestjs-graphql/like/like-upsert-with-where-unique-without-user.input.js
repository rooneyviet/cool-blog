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
exports.LikeUpsertWithWhereUniqueWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const like_where_unique_input_1 = require("./like-where-unique.input");
const class_transformer_1 = require("class-transformer");
const like_update_without_user_input_1 = require("./like-update-without-user.input");
const like_create_without_user_input_1 = require("./like-create-without-user.input");
let LikeUpsertWithWhereUniqueWithoutUserInput = class LikeUpsertWithWhereUniqueWithoutUserInput {
};
exports.LikeUpsertWithWhereUniqueWithoutUserInput = LikeUpsertWithWhereUniqueWithoutUserInput;
__decorate([
    (0, graphql_1.Field)(() => like_where_unique_input_1.LikeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => like_where_unique_input_1.LikeWhereUniqueInput),
    __metadata("design:type", Object)
], LikeUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_update_without_user_input_1.LikeUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => like_update_without_user_input_1.LikeUpdateWithoutUserInput),
    __metadata("design:type", like_update_without_user_input_1.LikeUpdateWithoutUserInput)
], LikeUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_create_without_user_input_1.LikeCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => like_create_without_user_input_1.LikeCreateWithoutUserInput),
    __metadata("design:type", like_create_without_user_input_1.LikeCreateWithoutUserInput)
], LikeUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.LikeUpsertWithWhereUniqueWithoutUserInput = LikeUpsertWithWhereUniqueWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], LikeUpsertWithWhereUniqueWithoutUserInput);
//# sourceMappingURL=like-upsert-with-where-unique-without-user.input.js.map