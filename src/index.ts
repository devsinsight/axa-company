import { InversifyContainer } from "./configuration/inversify-configuration";
import { settings } from "./configuration/evnironment";
import { RestifyApiConfig } from "./configuration/restify-configuration";

let configParams = {
  name: settings.name
};

export let server = InversifyContainer(configParams, RestifyApiConfig);

server.listen(settings.port);
