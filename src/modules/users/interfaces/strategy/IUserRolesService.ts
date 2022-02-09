import { UserDTO } from '../dtos/UserDTO';

export default interface IUserRolesService {
  execute(data: UserDTO): Promise<UserDTO>;
}
