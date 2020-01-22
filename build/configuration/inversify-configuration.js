"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const inversify_restify_utils_1 = require("inversify-restify-utils");
const foo_controller_1 = require("../controllers/foo.controller");
const foo_service_1 = require("../services/foo.service");
function InversifyContainer(opts, config) {
    let container = new inversify_1.Container();
    container
        .bind(inversify_restify_utils_1.TYPE.Controller)
        .to(foo_controller_1.FooController)
        .whenTargetNamed("FooController");
    container.bind("FooService").to(foo_service_1.FooService);
    let server = new inversify_restify_utils_1.InversifyRestifyServer(container, opts);
    return server.setConfig(api => config(api)).build();
}
exports.InversifyContainer = InversifyContainer;
//# sourceMappingURL=inversify-configuration.js.map