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
exports.MenusService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MenusService = class MenusService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createMenuDto) {
        return this.prisma.menu.create({ data: createMenuDto });
    }
    findDrafts() {
        return this.prisma.menu.findMany({ where: { active: false } });
    }
    findAll() {
        return this.prisma.menu.findMany({ where: { active: true } });
    }
    findOne(id) {
        return this.prisma.menu.findUnique({ where: { id } });
    }
    update(id, updateMenuDto) {
        return this.prisma.menu.update({
            where: { id },
            data: updateMenuDto,
        });
    }
    remove(id) {
        return this.prisma.menu.delete({ where: { id } });
    }
};
MenusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MenusService);
exports.MenusService = MenusService;
//# sourceMappingURL=menus.service.js.map