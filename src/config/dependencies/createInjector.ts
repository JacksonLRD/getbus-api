import { getCustomRepository } from "typeorm";
import Container from "typedi";
import { UserRepository } from "../../repositories/UserRepository";
import { CompanyRepository } from "../../repositories/CompanyRepository";
import { TravelRepository } from "../../repositories/TravelRepository";

// inicializador de dependências:
// inicializa controllers
import "../../controllers/UserController";

// inicializa services
import "../../services/UserService";
import "../../services/CompanyService";
import "../../services/TravelService";

const createDependencyInjector = () => {
  Container.set("UserRepository", getCustomRepository(UserRepository));
  Container.set("CompanyRepository", getCustomRepository(CompanyRepository));
  Container.set("TravelRepository", getCustomRepository(TravelRepository));
};

export default createDependencyInjector;
