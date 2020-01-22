"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_configuration_1 = require("./configuration/inversify-configuration");
const evnironment_1 = require("./configuration/evnironment");
const restify_configuration_1 = require("./configuration/restify-configuration");
let configParams = {
    name: evnironment_1.settings.name
};
exports.api = inversify_configuration_1.InversifyContainer(configParams, restify_configuration_1.RestifyApiConfig);
exports.api.listen(evnironment_1.settings.port);
//# sourceMappingURL=index.js.map