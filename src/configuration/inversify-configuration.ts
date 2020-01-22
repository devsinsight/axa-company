import "reflect-metadata";
import { Container } from "inversify";
import {
  interfaces,
  InversifyRestifyServer,
  TYPE
} from "inversify-restify-utils";
import { FooController } from "../controllers/foo.controller";
import { FooService } from "../services/foo.service";

export function InversifyContainer(opts?: any, config?: Function) {
  let container = new Container();

  container
    .bind<interfaces.Controller>(TYPE.Controller)
    .to(FooController)
    .whenTargetNamed("FooController");
  container.bind<FooService>("FooService").to(FooService);

  let server = new InversifyRestifyServer(container, opts);

  return server.setConfig(api => config(api)).build();
}
