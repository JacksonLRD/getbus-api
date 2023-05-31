import { userContainer } from "./userContainer.js";

export const routes = ({ filePath }) => {
  const userController = userContainer({ filePath });

  return {
    "/users:get": async (req, res) => userController.find(req, res),
    "/users:post": async (req, res) => userController.create(req, res),
  };
};
