import { Request } from "restify";
import { Controller, Get, interfaces } from "inversify-restify-utils";
import { injectable, inject } from "inversify";
import { FooService } from "../services/foo.service";
import { authenticateToken } from "../configuration/hooks-configuration";
import * as errors from "restify-errors";

@Controller("/foo")
@injectable()
export class FooController implements interfaces.Controller {
  constructor(@inject("FooService") private fooService: FooService) {}

  @Get("/", authenticateToken)
  private index(req: Request): any {
    return this.fooService.get(req.query.id);
  }
}
