import { Inject, Service } from "typedi";
import { UserDTO } from "../@types/dto/UserDto";
import { IUserService } from "../@types/services/IUserService";
import { IUserRepository } from "../@types/repositories/IUserRepository";
import { User } from "../models/UserEntity";
import { userFactory } from "factories/userFactory";

@Service("UserService")
export class UserService implements IUserService {
  constructor(
    @Inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async listWithCompany(): Promise<User[]> {
    const results = await this.userRepository.findAllWithCompany();
    return results;
  }

  async getWithCompany(userId: number): Promise<User[]> {
    const result = await this.userRepository.findOneWithCompany(userId);
    return result;
  }

  async create(newUserDto: UserDTO, companyId?: number): Promise<User> {
    const user = userFactory(newUserDto, companyId);
    return await this.userRepository.save(user);
  }

  async update(updatedUserDto: UserDTO) {
    const user = await this.userRepository.findOne(updatedUserDto.id);
    const updatedUser = { ...user, ...updatedUserDto };
    await this.userRepository.save(updatedUser);
  }

  async delete(id: number) {
    const userToRemove = await this.userRepository.findOne(id);
    if (!userToRemove) {
      throw new Error("User not found!");
    }

    await this.userRepository.remove(userToRemove);
  }
}
