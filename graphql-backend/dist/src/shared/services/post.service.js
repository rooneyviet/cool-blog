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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("./base.service");
const slugify_1 = require("slugify");
const prisma_service_1 = require("../../prisma/prisma.service");
let PostService = class PostService extends base_service_1.BaseCrudService {
    constructor(prisma) {
        super(prisma);
    }
    async create(args) {
        args.data.url = await this.generateUniqueUrl(args.data.title);
        return this.prisma.post.create(args);
    }
    async createMany(args) {
        if (Array.isArray(args.data)) {
            await Promise.all(args.data.map(async (post) => {
                post.url = await this.generateUniqueUrl(post.url);
            }));
        }
        else {
            args.data.url = await this.generateUniqueUrl(args.data.url);
        }
        return this.prisma.post.createMany(args);
    }
    async update(args) {
        if (args.data.title) {
            args.data.url = await this.generateUniqueUrl(args.data.title);
        }
        return this.prisma.post.update(args);
    }
    async updateMany(args) {
        if (Array.isArray(args.data)) {
            await Promise.all(args.data.map(async (post) => {
                if (post.url) {
                    post.url = await this.generateUniqueUrl(post.url);
                }
            }));
        }
        else {
            if (args.data.url) {
                args.data.url = await this.generateUniqueUrl(args.data.url);
            }
        }
        return this.prisma[this.modelName].updateMany(args);
    }
    async generateUniqueUrl(title) {
        let baseURL = (0, slugify_1.default)(title);
        let url = baseURL;
        let counter = 2;
        while (true) {
            const existingPost = await this.prisma.post.findUnique({
                where: { url },
            });
            if (!existingPost) {
                return url;
            }
            url = `${baseURL}-${counter}`;
            counter++;
        }
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
//# sourceMappingURL=post.service.js.map