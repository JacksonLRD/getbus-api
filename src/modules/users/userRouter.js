import UserController from "./UserController.js";

export const routes = (app) => {
  app.get("/users", UserController.find);
  app.get("/users/:id", UserController.findById);
  app.post("/users", UserController.create);
};
