const { createValidator } = require("./validator");

class UserController {
  #service;
  #validator;

  constructor(service) {
    this.#validator = {
      create: createValidator,
    };
    this.#service = service;
  }

  async create(req, res) {
    const data = await this.#validator.create.validateAsync(req.body);
    const user = await this.#service.create(data);

    res.status(201).json(user);
  }
}

module.exports = { UserController };
