import { Company } from "../models/CompanyEntity";
import { User } from "../models/UserEntity";
import { UserDTO } from "../@types/dto/UserDto";
import { getHashPassword } from "utils/hashPassword";

export const userFactory = (newUser: UserDTO, companyId?: number): User => {
  const company = new Company();
  company.id = companyId;
  const user = new User();
  user.name = newUser.name;
  user.email = newUser.email;
  user.hashPassword = getHashPassword(newUser.password);
  user.role = newUser.role;
  user.companies = company;

  return user;
};
