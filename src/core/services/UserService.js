const { UserPassenger } = require("../models/User");

class UserService {
  #model;
  #repository;

  constructor(repository) {
    this.#model = {
      passenger: UserPassenger,
    };
    this.#repository = repository;
  }

  async create(user) {
    const { role } = user;
    const userConverted = this.#model[role.toLowerCase()].toDatabase(user);

    const result = await this.#repository.save(userConverted);

    return result;
  }
}

module.exports = { UserService };
