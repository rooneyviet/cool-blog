"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlApiModule = void 0;
const common_1 = require("@nestjs/common");
const share_module_1 = require("../shared/share.module");
const auth_resolver_1 = require("./resolvers/auth.resolver");
const user_resolver_1 = require("./resolvers/user.resolver");
const post_resolver_1 = require("./resolvers/post.resolver");
let GraphqlApiModule = class GraphqlApiModule {
};
exports.GraphqlApiModule = GraphqlApiModule;
exports.GraphqlApiModule = GraphqlApiModule = __decorate([
    (0, common_1.Module)({
        imports: [share_module_1.SharedModule],
        providers: [user_resolver_1.UserResolver, auth_resolver_1.AuthResolver, post_resolver_1.PostResolver],
        exports: [],
    })
], GraphqlApiModule);
//# sourceMappingURL=graphql-api.module.js.map