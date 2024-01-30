const { UserController } = require("../modules/user/UserController");
const { usersRouter } = require("../modules/user/UserRoutes");
const { UserService } = require("../core/services/UserService");

class Server {
  #app;
  #repositories = new Map();
  #services = new Map();
  #controllers = new Map();

  defineApp(app) {
    this.#app = app;
    return this;
  }

  defineRepositories(connection) {
    this.#repositories.set("users", connection.createRepository("users"));

    return this;
  }

  defineServices() {
    this.#services.set("users", new UserService(this.#repositories.get("users")));

    return this;
  }

  defineControllers() {
    this.#controllers.set("users", new UserController(this.#services.get("users")));

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
