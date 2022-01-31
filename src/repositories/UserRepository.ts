import { User } from "../models/UserEntity";
import { EntityRepository, Repository } from "typeorm";
import { IUserRepository } from "../types/repositories/IUserRepository";

@EntityRepository(User)
export class UserRepository
  extends Repository<User>
  implements IUserRepository
{
  async findByEmail(userEmail: string): Promise<User> {
    return await this.findOne({
      relations: ["company"],
      where: { email: userEmail },
    });
  }

  findOneWithCompany(userId: number): Promise<User[]> {
    return this.find({
      relations: ["company"],
      where: { id: userId },
    });
  }

  findAllWithCompany(): Promise<User[]> {
    return this.find({
      relations: ["company"],
    });
  }
}
