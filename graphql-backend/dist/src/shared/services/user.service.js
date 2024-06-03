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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("./base.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../../prisma/prisma.service");
let UserService = class UserService extends base_service_1.BaseCrudService {
    constructor(prisma, jwtService) {
        super(prisma);
        this.jwtService = jwtService;
        this.saltRounds = 10;
    }
    async login(args) {
        const user = await this.prisma.user.findFirst({
            where: { email: args.email },
        });
        if (user) {
            if (await bcrypt.compare(args.password, user.password)) {
                const payload = {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    role: user.role,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                };
                return {
                    status: true,
                    access_token: await this.jwtService.signAsync(payload),
                };
            }
        }
        return { status: false, error: 'Invalid Email or Password' };
    }
    async create(args) {
        args.data.password = await bcrypt.hash(args.data.password, this.saltRounds);
        const findUserWithEmail = await this.prisma.user.findFirst({
            where: { email: args.data.email },
        });
        if (findUserWithEmail) {
            throw new common_1.UnprocessableEntityException('This email is already taken. Please try another.');
        }
        const findUserWithUsername = await this.prisma.user.findFirst({
            where: { username: args.data.username },
        });
        if (findUserWithUsername) {
            throw new common_1.UnprocessableEntityException('This username is already taken. Please try another.');
        }
        return this.prisma.user.create(args);
    }
    async createMany(args) {
        if (Array.isArray(args.data)) {
            for (let i = 0; i < args.data.length; i++) {
                args.data[i].password = await bcrypt.hash(args.data[i].password, this.saltRounds);
            }
        }
        return this.prisma.user.createMany(args);
    }
    async update(args) {
        return this.prisma.user.update(args);
    }
    async updateMany(args) {
        if (Array.isArray(args.data)) {
            for (let i = 0; i < args.data.length; i++) {
                if (args.data[i].password) {
                    args.data[i].password = await bcrypt.hash(args.data[i].password, this.saltRounds);
                }
            }
        }
        return this.prisma.user.updateMany(args);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map