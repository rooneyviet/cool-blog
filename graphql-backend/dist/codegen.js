"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    overwrite: true,
    schema: 'src',
    generates: {
        'graphql/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-resolvers',
                'typescript-document-nodes',
            ],
        },
        'graphql/graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};
exports.default = config;
//# sourceMappingURL=codegen.js.map