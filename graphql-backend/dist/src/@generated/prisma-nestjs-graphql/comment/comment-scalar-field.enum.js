"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CommentScalarFieldEnum;
(function (CommentScalarFieldEnum) {
    CommentScalarFieldEnum["id"] = "id";
    CommentScalarFieldEnum["text"] = "text";
    CommentScalarFieldEnum["postId"] = "postId";
    CommentScalarFieldEnum["userId"] = "userId";
    CommentScalarFieldEnum["createdAt"] = "createdAt";
    CommentScalarFieldEnum["updatedAt"] = "updatedAt";
})(CommentScalarFieldEnum || (exports.CommentScalarFieldEnum = CommentScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined });
//# sourceMappingURL=comment-scalar-field.enum.js.map