import UserRepository from "./repositories/UserRepository.js"
import UserService from "./services/UserService.js"

export const dependencyInjection = ({
  filePath
}) => {

  const userRepository = new UserRepository({
    filePath
  });

  const userService = new UserService({
    userRepository
  });

  return userService;
}
