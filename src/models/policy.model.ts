export class PolicyModel {
  constructor(
    public id: string,
    public amountInsurance: number,
    public email: string,
    public inceptionDate: Date,
    public installmentPayment: boolean,
    public clientId: string
  ) {}
}
