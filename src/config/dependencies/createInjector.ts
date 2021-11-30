import { getCustomRepository } from "typeorm";
import Container from "typedi";
import { UserRepository } from "../../repositories/UserRepository";
import { CompanyRepository } from "../../repositories/CompanyRepository";

// inicializador de dependências:
// inicializa controllers
import "../../controllers/UserController";

// inicializa services
import "../../services/UserService";
import "../../services/CompanyService";

const createDependencyInjector = () => {
  Container.set("UserRepository", getCustomRepository(UserRepository));
  Container.set("CompanyRepository", getCustomRepository(CompanyRepository));
};

export default createDependencyInjector;
