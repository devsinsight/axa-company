import { Request } from "restify";
import { Controller, Get, interfaces } from "inversify-restify-utils";
import { injectable, inject } from "inversify";
import { FooService } from "../services/foo.service";

@Controller("/foo")
@injectable()
export class FooController implements interfaces.Controller {
  constructor(@inject("FooService") private fooService: FooService) {}

  @Get("/")
  private index(req: Request): string {
    return this.fooService.get(req.query.id);
  }
}
