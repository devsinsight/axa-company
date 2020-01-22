import { injectable } from "inversify";

@injectable()
export class FooService {
  get(id: number) {
    return "foo:" + id;
  }
}
