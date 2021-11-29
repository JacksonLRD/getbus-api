
import { getCustomRepository } from "typeorm";
import Container from "typedi";
import { UserRepository } from "../../repositories/UserRepository";

// inicializador de dependências:
// inicializa controllers
import "../../controllers/UserController";

// inicializa services
import "../../services/UserService";

const createDependencyInjector = () => {
  Container.set("UserRepository", getCustomRepository(UserRepository));
};

export default createDependencyInjector;
