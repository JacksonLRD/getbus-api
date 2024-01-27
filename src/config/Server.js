const mongoose = require("mongoose");
const { UserController } = require("../modules/user/UserController");
const { UserRoutes, usersRouter } = require("../modules/user/UserRoutes");
const config = require("./env/default");
const { UserService } = require("../core/services/UserService");

class Server {
  #app;
  #controllers = new Map();
  #services = new Map();
  #repositories = new Map();

  defineApp(app) {
    this.#app = app;
    return this;
  }

  defineRepositories(connection) {
    this.#repositories.set("users", connection.createRepository("users"));

    console.log("[REPOSITORIES]: ", this.#repositories);
    return this;
  }

  defineServices() {
    this.#services.set(
      "users",
      new UserService(this.#repositories.get("users"))
    );

    console.log("[SERVICES]: ", this.#services);
    return this;
  }

  defineControllers() {
    this.#controllers.set(
      "users",
      new UserController(this.#services.get("users"))
    );

    console.log("[CONTROLLERS]: ", this.#controllers);
    return this;
  }

  loadRoutes(router) {
    usersRouter(router, this.#controllers.get("users"));

    this.#app.use("/api", router);

    return this;
  }

  runApplication(port) {
    return this.#app.listen(port, () => {
      console.info(`Server running on ${port}`);
    });
  }
}

module.exports = new Server();
