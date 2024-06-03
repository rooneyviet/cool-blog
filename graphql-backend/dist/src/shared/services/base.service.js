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
exports.BaseCrudService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let BaseCrudService = class BaseCrudService {
    constructor(prisma) {
        this.prisma = prisma;
        this.modelName = this.getModelName();
    }
    async findFirst(args) {
        try {
            return await this.prisma[this.modelName].findFirst(args);
        }
        catch (e) {
            return undefined;
        }
    }
    findUnique(args) {
        return this.prisma[this.modelName].findUnique(args);
    }
    findMany(args) {
        return this.prisma[this.modelName].findMany(args);
    }
    groupBy(args) {
        return this.prisma[this.modelName].groupBy(args);
    }
    aggregate(args) {
        return this.prisma[this.modelName].aggregate(args);
    }
    create(args) {
        return this.prisma[this.modelName].create(args);
    }
    createMany(args) {
        return this.prisma[this.modelName].createMany(args);
    }
    update(args) {
        return this.prisma[this.modelName].update(args);
    }
    updateMany(args) {
        return this.prisma[this.modelName].updateMany(args);
    }
    delete(args) {
        return this.prisma[this.modelName].delete(args);
    }
    deleteMany(args) {
        return this.prisma[this.modelName].deleteMany(args);
    }
    getModelName() {
        const modelName = this.constructor.name
            .replace('Service', '')
            .toLowerCase();
        console.log(modelName);
        return modelName;
    }
};
exports.BaseCrudService = BaseCrudService;
exports.BaseCrudService = BaseCrudService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BaseCrudService);
//# sourceMappingURL=base.service.js.map