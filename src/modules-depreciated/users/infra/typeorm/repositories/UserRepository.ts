import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/UserEntity';
import IUserRepository from '../../../interfaces/repositories/IUserRepository';

@EntityRepository(User)
export default class UserRepository extends Repository<User> implements IUserRepository {
  async findByEmail(userEmail: string): Promise<User> {
    return this.findOne({
      relations: ['company'],
      where: { email: userEmail },
    });
  }

  findOneWithCompany(userId: number): Promise<User[]> {
    return this.find({
      relations: ['company'],
      where: { id: userId },
    });
  }

  findAllWithCompany(): Promise<User[]> {
    return this.find({
      relations: ['company'],
    });
  }
}
