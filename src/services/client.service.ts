import { injectable, inject } from "inversify";
import { ClientModel } from "../models/client.model";
import { ClientRepository } from "../repository/client.repository";
import { PolicyRepository } from "../repository/policy.repository";
import { PolicyModel } from "../models/policy.model";

@injectable()
export class ClientService {
  clients: Array<ClientModel>;

  constructor(
    @inject("ClientRepository") private clientRepositor: ClientRepository,
    @inject("PolicyRepository") private policyRepository: PolicyRepository
  ) {}

  async getClientById(id: string): Promise<ClientModel> {
    return await this.clientRepositor.getById(id).then(data => data);
  }

  async getClientByUsernname(username: string): Promise<ClientModel> {
    return await this.clientRepositor
      .getByUsername(username)
      .then(data => data);
  }

  async getPoliciesByClientId(id: string): Promise<Array<PolicyModel>> {
    return await this.policyRepository.getByClientId(id).then(data => data);
  }

  async getPoliciesByUsername(username: string): Promise<Array<PolicyModel>> {
    return await this.getClientByUsernname(username).then(async client => {
      return await this.policyRepository
        .getByClientId(client.id)
        .then(data => data);
    });
  }
}
