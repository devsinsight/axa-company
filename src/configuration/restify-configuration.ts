import * as restify from "restify";
import * as corsMiddleware from "restify-cors-middleware";
import * as restifyOAuth2 from "restify-oauth2";
import * as hooks from "./hooks-configuration";

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

export function RestifyApiConfig(server: restify.Server) {
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
