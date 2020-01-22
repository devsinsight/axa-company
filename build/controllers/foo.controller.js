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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_restify_utils_1 = require("inversify-restify-utils");
const inversify_1 = require("inversify");
const foo_service_1 = require("../services/foo.service");
let FooController = class FooController {
    constructor(fooService) {
        this.fooService = fooService;
    }
    index(req) {
        return this.fooService.get(req.query.id);
    }
};
__decorate([
    inversify_restify_utils_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], FooController.prototype, "index", null);
FooController = __decorate([
    inversify_restify_utils_1.Controller("/foo"),
    inversify_1.injectable(),
    __param(0, inversify_1.inject("FooService")),
    __metadata("design:paramtypes", [foo_service_1.FooService])
], FooController);
exports.FooController = FooController;
//# sourceMappingURL=foo.controller.js.map