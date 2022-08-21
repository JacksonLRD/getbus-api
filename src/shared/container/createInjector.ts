import { getCustomRepository } from 'typeorm';
import Container from 'typedi';
import UserRepository from '../../modules-depreciated/users/infra/typeorm/repositories/UserRepository';
import CompanyRepository from '../../modules-depreciated/companies/infra/typeorm/repositories/CompanyRepository';
import TravelRepository from '../../modules-depreciated/travels/infra/typeorm/repositories/TravelRepository';

// inicializador de dependências:
// inicializa controllers
import '../../modules-depreciated/users/presentation/controller/UserController';
import '../../modules-depreciated/companies/presentation/controller/CompanyController';
import '../../modules-depreciated/travels/presentation/controller/TravelController';

// inicializa services
import '../../modules-depreciated/users/application/services/UserService';
import '../../modules-depreciated/companies/application/services/CompanyService';
import '../../modules-depreciated/travels/application/services/TravelService';

const createDependencyInjector = () => {
  Container.set('UserRepository', getCustomRepository(UserRepository));
  Container.set('CompanyRepository', getCustomRepository(CompanyRepository));
  Container.set('TravelRepository', getCustomRepository(TravelRepository));
};

export default createDependencyInjector;
