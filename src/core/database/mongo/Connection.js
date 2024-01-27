const mongoose = require("mongoose");

const { userSchema } = require("./schemas");
const { Repository } = require("./Repository");

class MongoDb {
  #connString;
  #instance;
  #schemas = new Map();

  constructor(connString) {
    this.#connString = connString;

    this.#schemas.set("users", userSchema);
  }

  async connect() {
    try {
      this.#instance = await mongoose.connect(this.#connString, {
        maxPoolSize: 10,
      });
      console.info("Mongo database connected");

      return this.#instance;
    } catch (error) {
      console.error(error);
    }
  }

  async close() {
    await mongoose.disconnect();

    console.info("Mongo database disconnected");
  }

  createRepository(name) {
    const model = this.#instance.model(name, this.#schemas.get(name));

    return new Repository(model);
  }
}

module.exports = { MongoDb };
