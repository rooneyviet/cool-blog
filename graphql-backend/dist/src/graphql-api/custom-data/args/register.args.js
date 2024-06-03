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
exports.RegisterArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let RegisterArgs = class RegisterArgs {
};
exports.RegisterArgs = RegisterArgs;
__decorate([
    (0, class_validator_1.MinLength)(6, {
        message: 'email must be at least 6 characters',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], RegisterArgs.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Length)(5, 20, {
        message: 'username must be between 5 and 20 characters',
    }),
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], RegisterArgs.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.Length)(6, 20, {
        message: 'password must be between 6 and 20 characters',
    }),
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], RegisterArgs.prototype, "password", void 0);
exports.RegisterArgs = RegisterArgs = __decorate([
    (0, graphql_2.ArgsType)()
], RegisterArgs);
//# sourceMappingURL=register.args.js.map