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
exports.LikeUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const user_update_one_required_without_likes_nested_input_1 = require("../user/user-update-one-required-without-likes-nested.input");
const post_update_one_required_without_likes_nested_input_1 = require("../post/post-update-one-required-without-likes-nested.input");
let LikeUpdateInput = class LikeUpdateInput {
};
exports.LikeUpdateInput = LikeUpdateInput;
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], LikeUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LikeUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LikeUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_likes_nested_input_1.UserUpdateOneRequiredWithoutLikesNestedInput, { nullable: true }),
    __metadata("design:type", user_update_one_required_without_likes_nested_input_1.UserUpdateOneRequiredWithoutLikesNestedInput)
], LikeUpdateInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_update_one_required_without_likes_nested_input_1.PostUpdateOneRequiredWithoutLikesNestedInput, { nullable: true }),
    __metadata("design:type", post_update_one_required_without_likes_nested_input_1.PostUpdateOneRequiredWithoutLikesNestedInput)
], LikeUpdateInput.prototype, "post", void 0);
exports.LikeUpdateInput = LikeUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], LikeUpdateInput);
//# sourceMappingURL=like-update.input.js.map