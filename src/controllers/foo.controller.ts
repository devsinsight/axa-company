import { Request } from "restify";
import { Controller, Get, interfaces } from "inversify-restify-utils";
import { injectable, inject } from "inversify";
import { FooService } from "../services/foo.service";
import {
  authenticateToken as authenticate,
  authorize
} from "../configuration/hooks-configuration";

@Controller("/foo")
@injectable()
export class FooController implements interfaces.Controller {
  constructor(@inject("FooService") private fooService: FooService) {}

  @Get("/", authenticate, (req, res, next) => {
    authorize(req, res, next, ["client"]);
  })
  private index(req: Request): any {
    return this.fooService.get(req.query.id);
  }
}
