"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const corsMiddleware = require("restify-cors-middleware");
const restifyOAuth2 = require("restify-oauth2");
const hooks = require("./hooks-configuration");
const cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ["*", "*"],
    allowHeaders: ["API-Token"],
    exposeHeaders: ["API-Token-Expiry"]
});
const RESOURCES = Object.freeze({
    INITIAL: "/",
    TOKEN: "/token",
    PUBLIC: "/public",
    SECRET: "/secret"
});
function RestifyApiConfig(server) {
    server.pre(cors.preflight);
    server.pre(restify.pre.sanitizePath());
    server.use(cors.actual);
    server.use(restify.plugins.acceptParser(server.acceptable));
    server.use(restify.plugins.bodyParser());
    server.use(restify.plugins.queryParser());
    server.use(restify.plugins.authorizationParser());
    server.use(restify.plugins.fullResponse());
    restifyOAuth2.ropc(server, { tokenEndpoint: RESOURCES.TOKEN, hooks });
}
exports.RestifyApiConfig = RestifyApiConfig;
//# sourceMappingURL=restify-configuration.js.map