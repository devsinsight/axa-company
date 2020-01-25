import * as restify from "restify";
import * as corsMiddleware from "restify-cors-middleware";
import * as restifyOAuth2 from "restify-oauth2";
import * as hooks from "./hooks-configuration";
import * as restifySwaggerJsdoc from "restify-swagger-jsdoc";

const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ["*", "*"],
  allowHeaders: ["API-Token"],
  exposeHeaders: ["API-Token-Expiry"]
});

export function RestifyApiConfig(server: restify.Server) {
  server.pre(cors.preflight);
  server.pre(restify.pre.sanitizePath());
  server.use(cors.actual);
  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.bodyParser({ mapParams: false }));
  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.authorizationParser());
  server.use(restify.plugins.fullResponse());

  restifySwaggerJsdoc.createSwaggerPage({
    title: "AXA Client API Documentation",
    version: "1.0.0",
    server: server,
    path: "/docs/swagger",
    apis: ["./dist/configuration/swagger.yaml"],
    securityDefinitions: {
      axa_auth: {
        type: "oauth2",
        flow: "password",
        tokenUrl: "http://localhost:3000/token",
        scopes: { read: "get info related to clients and policies" }
      }
    }
  });

  restifyOAuth2.ropc(server, { tokenEndpoint: "/token", hooks });
}
