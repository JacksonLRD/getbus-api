import UserController from "./UserController.js";
import UserRepository from "./repositories/UserRepository.js";
import UserService from "./services/UserService.js";

export const userContainer = ({ filePath }) => {
  const userRepository = new UserRepository({ filePath });

  const userService = new UserService({ userRepository });

  const userController = new UserController({ userService });

  return userController;
};
