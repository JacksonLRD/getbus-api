import { UserDTO, UserCompanyDTO, UpdateUser, UpdatedUser } from '../dtos/UserDTO';
import User from '../../infra/typeorm/entities/UserEntity';
import TokenPayload from '../middlewares/TokenPayLoad';

export default interface IUserService {
  authenticate(userEmail: string, userPassword: string): Promise<string>;
  listWithCompany(): Promise<User[]>;
  getWithCompany(userId: number): Promise<User[]>;
  createdByAdmin(usuarioDto: UserDTO): Promise<UpdatedUser>;
  createdByPassengerUser(newUserDto: UserDTO): Promise<UpdatedUser>;
  createdByCompanyUser(newUserDto: UserCompanyDTO, user: TokenPayload): Promise<UpdatedUser>;
  update(userId: number, updatedUserDto: UpdateUser): Promise<UpdatedUser>;
  delete(userId: number): Promise<void>;
}
