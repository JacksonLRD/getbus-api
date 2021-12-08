import {
  UserDTO,
  UserCompanyDTO,
  UpdateUser,
  UpdatedUser,
} from "../dto/UserDto";
import { User } from "../../models/UserEntity";
import { TokenPayload } from "../../@types/middlewares/tokenPayLoad";

export interface IUserService {
  authenticate(userEmail: string, userPassword: string): Promise<string>;
  listWithCompany(): Promise<User[]>;
  getWithCompany(userId: number): Promise<User[]>;
  createdByAdmin(usuarioDto: UserDTO): Promise<UpdatedUser>;
  createdByPassengerUser(newUserDto: UserDTO): Promise<UpdatedUser>;
  createdByCompanyUser(
    newUserDto: UserCompanyDTO,
    user: TokenPayload
  ): Promise<UpdatedUser>;
  update(userId: number, updatedUserDto: UpdateUser): Promise<UpdatedUser>;
  delete(userId: number): Promise<void>;
}
