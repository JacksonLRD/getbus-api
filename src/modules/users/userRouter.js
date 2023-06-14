import { userContainer } from "./userContainer.js";

export const routes = (app) => {
  const userController = userContainer();

  app.get("/users", (req, res) => userController.find(req, res));
  app.post("/users", (req, res) => userController.create(req, res));
};
