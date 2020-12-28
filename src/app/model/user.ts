import {Address} from "./address";

export class User {
  constructor(public mail: String, public lastName: String, public firstName: String,
  public password: String, public addresses: Address[]){}
}
