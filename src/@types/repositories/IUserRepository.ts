import { UserDTO } from "../dto/UserDto";
import { User } from "../../models/UserEntity";

export interface IUserRepository {
  find(): Promise<User[]>;
  findOne(id: number): Promise<User>;
  findByEmail(userEmail: string): Promise<User>;
  findOneWithCompany(userId: number): Promise<User[]>;
  findAllWithCompany(): Promise<User[]>;
  save(userDto: UserDTO): Promise<User>;
  remove(entities: User | User[]): Promise<User[]>;
}
