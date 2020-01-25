import * as rp from "request-promise";
import { injectable } from "inversify";
import { ClientModel } from "../models/client.model";
import { settings } from "../setup/evnironment";

@injectable()
export class ClientRepository {
  getAll(): Promise<any> {
    return rp(settings.clientUrl).then(data => JSON.parse(data));
  }
  getById(id: string): Promise<ClientModel> {
    return this.getAll().then(data => data.clients.find(c => c.id == id));
  }

  getByUsername(username: string): Promise<ClientModel> {
    return this.getAll().then(data =>
      data.clients.find(c => c.email == username)
    );
  }
}
