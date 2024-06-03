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
exports.LikeUncheckedUpdateManyWithoutUserNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const like_create_without_user_input_1 = require("./like-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const like_create_or_connect_without_user_input_1 = require("./like-create-or-connect-without-user.input");
const like_upsert_with_where_unique_without_user_input_1 = require("./like-upsert-with-where-unique-without-user.input");
const like_create_many_user_input_envelope_input_1 = require("./like-create-many-user-input-envelope.input");
const like_where_unique_input_1 = require("./like-where-unique.input");
const like_update_with_where_unique_without_user_input_1 = require("./like-update-with-where-unique-without-user.input");
const like_update_many_with_where_without_user_input_1 = require("./like-update-many-with-where-without-user.input");
const like_scalar_where_input_1 = require("./like-scalar-where.input");
let LikeUncheckedUpdateManyWithoutUserNestedInput = class LikeUncheckedUpdateManyWithoutUserNestedInput {
};
exports.LikeUncheckedUpdateManyWithoutUserNestedInput = LikeUncheckedUpdateManyWithoutUserNestedInput;
__decorate([
    (0, graphql_1.Field)(() => [like_create_without_user_input_1.LikeCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => like_create_without_user_input_1.LikeCreateWithoutUserInput),
    __metadata("design:type", Array)
], LikeUncheckedUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_create_or_connect_without_user_input_1.LikeCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => like_create_or_connect_without_user_input_1.LikeCreateOrConnectWithoutUserInput),
    __metadata("design:type", Array)
], LikeUncheckedUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_upsert_with_where_unique_without_user_input_1.LikeUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => like_upsert_with_where_unique_without_user_input_1.LikeUpsertWithWhereUniqueWithoutUserInput),
    __metadata("design:type", Array)
], LikeUncheckedUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_create_many_user_input_envelope_input_1.LikeCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => like_create_many_user_input_envelope_input_1.LikeCreateManyUserInputEnvelope),
    __metadata("design:type", like_create_many_user_input_envelope_input_1.LikeCreateManyUserInputEnvelope)
], LikeUncheckedUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_where_unique_input_1.LikeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => like_where_unique_input_1.LikeWhereUniqueInput),
    __metadata("design:type", Array)
], LikeUncheckedUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_where_unique_input_1.LikeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => like_where_unique_input_1.LikeWhereUniqueInput),
    __metadata("design:type", Array)
], LikeUncheckedUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_where_unique_input_1.LikeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => like_where_unique_input_1.LikeWhereUniqueInput),
    __metadata("design:type", Array)
], LikeUncheckedUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_where_unique_input_1.LikeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => like_where_unique_input_1.LikeWhereUniqueInput),
    __metadata("design:type", Array)
], LikeUncheckedUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_update_with_where_unique_without_user_input_1.LikeUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => like_update_with_where_unique_without_user_input_1.LikeUpdateWithWhereUniqueWithoutUserInput),
    __metadata("design:type", Array)
], LikeUncheckedUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_update_many_with_where_without_user_input_1.LikeUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => like_update_many_with_where_without_user_input_1.LikeUpdateManyWithWhereWithoutUserInput),
    __metadata("design:type", Array)
], LikeUncheckedUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_scalar_where_input_1.LikeScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => like_scalar_where_input_1.LikeScalarWhereInput),
    __metadata("design:type", Array)
], LikeUncheckedUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.LikeUncheckedUpdateManyWithoutUserNestedInput = LikeUncheckedUpdateManyWithoutUserNestedInput = __decorate([
    (0, graphql_2.InputType)()
], LikeUncheckedUpdateManyWithoutUserNestedInput);
//# sourceMappingURL=like-unchecked-update-many-without-user-nested.input.js.map