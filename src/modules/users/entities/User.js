import { randomUUID } from "node:crypto";

export default class User {
  constructor({ name, email, password }) {
    this.id = randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
