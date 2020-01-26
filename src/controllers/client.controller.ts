import { Request } from "restify";
import { Controller, Get, interfaces } from "inversify-restify-utils";
import { injectable, inject } from "inversify";
import { ClientService } from "../services/client.service";
import {
  authenticateToken as authenticate,
  authorize
} from "../setup/security.config";

@Controller("/client")
@injectable()
export class ClientController implements interfaces.Controller {
  constructor(@inject("ClientService") private clientService: ClientService) {}

  @Get("/info-by-id", (req, res, next) => {
    authorize(req, res, next, ["admin", "client"]);
  })
  public async getClientInfoById(req: Request): Promise<any> {
    return await this.clientService
      .getClientById(req.query.id)
      .then(data => data || "Client was not found.")
      .catch(err => err);
  }

  @Get("/info-by-username", (req, res, next) => {
    authorize(req, res, next, ["admin", "client"]);
  })
  public async getClientInfoByUsername(req: Request): Promise<any> {
    return await this.clientService
      .getClientByUsernname(req.query.username)
      .then(data => data || "Client was not found.")
      .catch(err => err);
  }

  @Get("/policies-by-client-id", (req, res, next) => {
    authorize(req, res, next, ["admin"]);
  })
  public async getPoliciesByClientId(req: Request): Promise<any> {
    return await this.clientService
      .getPoliciesByClientId(req.query.id)
      .then(data => data || "Policies was not found.")
      .catch(err => err);
  }

  @Get("/policies-by-client-username", (req, res, next) => {
    authorize(req, res, next, ["admin"]);
  })
  public async getPoliciesByUsername(req: Request): Promise<any> {
    return await this.clientService
      .getPoliciesByUsername(req.query.username)
      .then(data => data || "Policies was not found.")
      .catch(err => err);
  }
}
