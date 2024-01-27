class Repository {
  #model;

  constructor(model) {
    this.#model = model;
  }

  async save(data) {
    const { _id } = await this.#model.create(data);

    return { id: _id, ...data };
  }
}

module.exports = { Repository };
