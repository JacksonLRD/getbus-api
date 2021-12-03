import { UserDTO } from "../dto/UserDto";
import { User } from "../../models/UserEntity";

export interface IUserService {
  listWithCompany(): Promise<User[]>;
  getWithCompany(userId: number): Promise<User[]>;
  create(usuarioDto: UserDTO): Promise<User>;
  update(updatedUserDto: UserDTO): Promise<User>;
  delete(userId: number): Promise<void>;
}
