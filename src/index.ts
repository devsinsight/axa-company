import { InversifyContainer } from "./setup/inversify.config";
import { settings } from "./setup/evnironment";
import { RestifyApiConfig } from "./setup/restify.config";
import * as open from "open";

let configParams = {
  name: settings.name
};

export let server = InversifyContainer(configParams, RestifyApiConfig);

server.listen(settings.port);
