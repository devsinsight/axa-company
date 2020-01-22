import { InversifyContainer } from "./configuration/inversify-configuration";
import { settings } from "./configuration/evnironment";
import { RestifyApiConfig } from "./configuration/restify-configuration";

let configParams = {
  name: settings.name
};

export let api = InversifyContainer(configParams, RestifyApiConfig);

api.listen(settings.port);
