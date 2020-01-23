import "reflect-metadata";
import { Container } from "inversify";
import {
  interfaces,
  InversifyRestifyServer,
  TYPE
} from "inversify-restify-utils";
import { ClientService } from "../services/client.service";
import { ClientController } from "../controllers/client.controller";
import { ClientRepository } from "../repository/client.repository";
import { PolicyRepository } from "../repository/policy.repository";

export function InversifyContainer(opts?: any, config?: Function) {
  let container = new Container();

  container
    .bind<interfaces.Controller>(TYPE.Controller)
    .to(ClientController)
    .whenTargetNamed("ClientController");
  container.bind<ClientService>("ClientService").to(ClientService);
  container.bind<ClientRepository>("ClientRepository").to(ClientRepository);
  container.bind<PolicyRepository>("PolicyRepository").to(PolicyRepository);

  let server = new InversifyRestifyServer(container, opts);

  return server.setConfig(api => config(api)).build();
}
