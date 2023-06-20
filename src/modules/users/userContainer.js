import UserController from "./UserController.js";
import UserRepository from "./repositories/UserRepository.js";
import UserService from "./services/UserService.js";

export const userContainer = () => {
  const userRepository = new UserRepository();

  const userService = new UserService(userRepository);

  return {
    userService,
  };
};
