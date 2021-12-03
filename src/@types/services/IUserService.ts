import { UserDTO, UserCompanyDTO } from "../dto/UserDto";
import { User } from "../../models/UserEntity";
import { TokenPayload } from "../../@types/middlewares/tokenPayLoad";

export interface IUserService {
  authenticate(userEmail: string, userPassword: string): Promise<string>;
  listWithCompany(): Promise<User[]>;
  getWithCompany(userId: number): Promise<User[]>;
  createdByAdmin(usuarioDto: UserDTO): Promise<User>;
  createdByCompanyUser(
    newUserDto: UserCompanyDTO,
    user: TokenPayload
  ): Promise<User>;
  update(updatedUserDto: UserDTO): Promise<User>;
  delete(userId: number): Promise<void>;
}
