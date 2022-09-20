import { customer} from "../models/customer"

export class CustomerService {
  customers: customer[];

  constructor() {
    this.customers = [
      new customer(101, "ash",32, "./assets/images/jerry-la-souris-ek8a3m.jpg"),
      new customer(108, "ash1", 33,"./assets/images/jerry1.png"),
    ]
  }

  getcutomers() {
    return this.customers;
  }

  addcustomer(customer: customer) {
    this.customers.push(customer);
  }
}
