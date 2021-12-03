import { User } from "../models/UserEntity";
import { EntityRepository, Repository } from "typeorm";
import { IUserRepository } from "../@types/repositories/IUserRepository";

@EntityRepository(User)
export class UserRepository
  extends Repository<User>
  implements IUserRepository
{
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
