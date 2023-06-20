import UserController from "./UserController.js";

export const routes = (app) => {
  app.get("/users", UserController.find);
  app.post("/users", UserController.create);
};
