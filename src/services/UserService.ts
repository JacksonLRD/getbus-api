import { Inject, Service } from "typedi";
import { UserDTO } from "../@types/dto/UserDto";
import { IUserService } from "../@types/services/IUserService";
import { IUserRepository } from "../@types/repositories/IUserRepository";
import { User } from "../models/UserEntity";
import { updateUser, userFactory } from "../factories/userFactory";
import { getHashPassword } from "../utils/hashPassword";
import { TokenPayload } from "../@types/middlewares/tokenPayLoad";
import { sign } from "jsonwebtoken";

@Service("UserService")
export class UserService implements IUserService {
  constructor(
    @Inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async authenticate(userEmail: string, userPassword: string): Promise<string> {
    const user = await this.userRepository.findByEmail(userEmail);
    if (user.hashPassword === getHashPassword(userPassword)) {
      const { id, name, company, role } = user;
      const payload: TokenPayload = {
        role,
        name,
        id,
        company,
      };
      return sign(payload, process.env.AUTH_SECRET);
    }
    throw new Error("Usuário ou senha incorretos");
  }

  async listWithCompany(): Promise<User[]> {
    const results = await this.userRepository.findAllWithCompany();
    return results;
  }

  async getWithCompany(userId: number): Promise<User[]> {
    const result = await this.userRepository.findOneWithCompany(userId);
    return result;
  }

  async create(newUserDto: UserDTO): Promise<User> {
    const user = userFactory(newUserDto);
    return await this.userRepository.save(user);
  }

  async update(updatedUserDto: UserDTO): Promise<User> {
    const user = await this.userRepository.findOne(updatedUserDto.id);
    return await this.userRepository.save(updateUser(user, updatedUserDto));
  }

  async delete(id: number) {
    const userToRemove = await this.userRepository.findOne(id);
    if (!userToRemove) {
      throw new Error("User not found!");
    }

    await this.userRepository.remove(userToRemove);
  }
}
