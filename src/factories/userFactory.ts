import { Company } from "../models/CompanyEntity";
import { User } from "../models/UserEntity";
import { UpdateUser, UserDTO } from "../@types/dto/UserDto";
import { getHashPassword } from "../utils/hashPassword";

export const userFactory = (newUser: UserDTO): User => {
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
