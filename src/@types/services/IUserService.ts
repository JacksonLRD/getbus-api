import { UserDTO } from "../dto/UserDto";
import { User } from "../../models/UserEntity";

export interface IUserService {
  listWithCompany(): Promise<User[]>;
  getWithCompany(userId: number): Promise<User[]>;
  create(usuarioDto: UserDTO, companyId?: number): Promise<User>;
  update(updatedUserDto: UserDTO): Promise<void>;
  delete(userId: number): Promise<void>;
}
