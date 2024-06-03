"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
const path_1 = require("path");
const recipes_module_1 = require("./recipes/recipes.module");
const share_module_1 = require("./shared/share.module");
const graphql_api_module_1 = require("./graphql-api/graphql-api.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            recipes_module_1.RecipesModule,
            share_module_1.SharedModule,
            graphql_api_module_1.GraphqlApiModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: true,
                formatError: (error) => {
                    const originalError = error.extensions
                        ?.originalError;
                    if (!originalError) {
                        return {
                            message: error.message,
                            code: error.extensions?.code,
                        };
                    }
                    return {
                        message: originalError.message,
                        code: error.extensions?.code,
                    };
                },
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                installSubscriptionHandlers: true,
                buildSchemaOptions: {
                    directives: [
                        new graphql_2.GraphQLDirective({
                            name: 'upper',
                            locations: [graphql_2.DirectiveLocation.FIELD_DEFINITION],
                        }),
                    ],
                },
            }),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map