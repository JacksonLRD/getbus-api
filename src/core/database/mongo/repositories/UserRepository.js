const { userSchema } = require("../schemas/userSchema");

class UserRepository {
  #connection;
  #model;

  constructor(connection) {
    this.#connection = connection;
    this.#model = this.#connection.model("users", userSchema);
  }

  async create(user) {
    const data = await this.#model.create(user);

    return data;
  }
}

module.exports = { UserRepository };
