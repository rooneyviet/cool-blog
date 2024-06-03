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
exports.LikeUpdateManyWithWhereWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const like_scalar_where_input_1 = require("./like-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const like_update_many_mutation_input_1 = require("./like-update-many-mutation.input");
let LikeUpdateManyWithWhereWithoutUserInput = class LikeUpdateManyWithWhereWithoutUserInput {
};
exports.LikeUpdateManyWithWhereWithoutUserInput = LikeUpdateManyWithWhereWithoutUserInput;
__decorate([
    (0, graphql_1.Field)(() => like_scalar_where_input_1.LikeScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => like_scalar_where_input_1.LikeScalarWhereInput),
    __metadata("design:type", like_scalar_where_input_1.LikeScalarWhereInput)
], LikeUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_update_many_mutation_input_1.LikeUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => like_update_many_mutation_input_1.LikeUpdateManyMutationInput),
    __metadata("design:type", like_update_many_mutation_input_1.LikeUpdateManyMutationInput)
], LikeUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
exports.LikeUpdateManyWithWhereWithoutUserInput = LikeUpdateManyWithWhereWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], LikeUpdateManyWithWhereWithoutUserInput);
//# sourceMappingURL=like-update-many-with-where-without-user.input.js.map