export class ClientModel {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public role: string,
    public password: string
  ) {}
}