import { getCustomRepository } from 'typeorm';
import Container from 'typedi';
import UserRepository from '../../modules/users/infra/typeorm/repositories/UserRepository';
import CompanyRepository from '../../modules/companies/infra/typeorm/repositories/CompanyRepository';
import TravelRepository from '../../modules/travels/infra/typeorm/repositories/TravelRepository';

// inicializador de dependências:
// inicializa controllers
import '../../modules/users/presentation/controller/UserController';
import '../../modules/companies/presentation/controller/CompanyController';
import '../../modules/travels/presentation/controller/TravelController';

// inicializa services
import '../../modules/users/application/services/UserService';
import '../../modules/companies/application/services/CompanyService';
import '../../modules/travels/application/services/TravelService';

const createDependencyInjector = () => {
  Container.set('UserRepository', getCustomRepository(UserRepository));
  Container.set('CompanyRepository', getCustomRepository(CompanyRepository));
  Container.set('TravelRepository', getCustomRepository(TravelRepository));
};

export default createDependencyInjector;
