import * as rp from "request-promise";
import { injectable } from "inversify";
import { PolicyModel } from "../models/policy.model";
import { settings } from "../setup/evnironment";

@injectable()
export class PolicyRepository {
  getAll(): Promise<any> {
    return rp(settings.policyUrl).then(data => JSON.parse(data));
  }
  getByClientId(clientId: string): Promise<Array<PolicyModel>> {
    return this.getAll().then(data =>
      data.policies.filter(p => p.clientId == clientId)
    );
  }
}
