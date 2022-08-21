import { UserDTO } from '../dtos/UserDTO';
import User from '../../infra/typeorm/entities/UserEntity';

export default interface IUserRepository {
  find(): Promise<User[]>;
  findOne(id: number): Promise<User>;
  findByEmail(userEmail: string): Promise<User>;
  findOneWithCompany(userId: number): Promise<User[]>;
  findAllWithCompany(): Promise<User[]>;
  save(userDto: UserDTO): Promise<User>;
  remove(entities: User | User[]): Promise<User[]>;
}
