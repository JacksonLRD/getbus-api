import Company from '../../companies/infra/typeorm/entities/CompanyEntity';
import User from '../infra/typeorm/entities/UserEntity';
import { UpdateUser, UserDTO } from '../interfaces/dtos/UserDTO';
import getHashPassword from '../../../shared/utils/hashPassword';
import validateEmail from '../../../shared/utils/validateEmail';

export const userFactory = (newUser: UserDTO): User => {
  if (!validateEmail(newUser.email)) {
    throw new Error('Email inválido');
  }
  const company = new Company();
  company.id = newUser.companyId ? newUser.companyId : null;
  const user = new User();
  user.name = newUser.name;
  user.email = newUser.email;
  user.hashPassword = getHashPassword(newUser.password);
  user.role = newUser.role;
  user.company = company;
  return user;
};

export const updateUser = (user: User, userDto: UpdateUser): User => {
  const updatedUser = { ...user, ...userDto };
  return updatedUser;
};
