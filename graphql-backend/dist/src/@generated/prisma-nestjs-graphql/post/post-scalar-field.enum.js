"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var PostScalarFieldEnum;
(function (PostScalarFieldEnum) {
    PostScalarFieldEnum["id"] = "id";
    PostScalarFieldEnum["url"] = "url";
    PostScalarFieldEnum["createdAt"] = "createdAt";
    PostScalarFieldEnum["views"] = "views";
    PostScalarFieldEnum["updatedAt"] = "updatedAt";
    PostScalarFieldEnum["published"] = "published";
    PostScalarFieldEnum["title"] = "title";
    PostScalarFieldEnum["content"] = "content";
    PostScalarFieldEnum["authorId"] = "authorId";
})(PostScalarFieldEnum || (exports.PostScalarFieldEnum = PostScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined });
//# sourceMappingURL=post-scalar-field.enum.js.map