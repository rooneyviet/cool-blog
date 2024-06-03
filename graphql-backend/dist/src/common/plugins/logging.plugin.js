"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingPlugin = void 0;
const apollo_1 = require("@nestjs/apollo");
let LoggingPlugin = class LoggingPlugin {
    async requestDidStart() {
        console.log('Request started');
        return {
            async willSendResponse() {
                console.log('Will send response');
            },
        };
    }
};
exports.LoggingPlugin = LoggingPlugin;
exports.LoggingPlugin = LoggingPlugin = __decorate([
    (0, apollo_1.Plugin)()
], LoggingPlugin);
//# sourceMappingURL=logging.plugin.js.map