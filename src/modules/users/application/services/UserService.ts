import { Inject, Service } from 'typedi';
import { sign } from 'jsonwebtoken';
import { UpdateUser, UserCompanyDTO, UserDTO, UpdatedUser } from '../../dtos/UserDto';
import IUserService from '../../interfaces/services/IUserService';
import IUserRepository from '../../interfaces/repositories/IUserRepository';
import User from '../../infra/typeorm/entities/UserEntity';
import { updateUser, userFactory } from '../../factory/userFactory';
import getHashPassword from '../../../../shared/utils/hashPassword';
import TokenPayload from '../../middlewares/TokenPayLoad';

@Service('UserService')
export default class UserService implements IUserService {
  constructor(
    @Inject('UserRepository')
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
    throw new Error('Usuário ou senha incorretos');
  }

  async listWithCompany(): Promise<User[]> {
    const results = await this.userRepository.findAllWithCompany();
    return results;
  }

  async getWithCompany(userId: number): Promise<User[]> {
    if (!userId) {
      throw new Error('Informações incorretas e/ou incompletas');
    }
    const result = await this.userRepository.findOneWithCompany(userId);
    if (!result) {
      throw new Error('Usuário não encontrado');
    }
    return result;
  }

  async createdByAdmin(newUserDto: UserDTO): Promise<UpdatedUser> {
    const user = userFactory(newUserDto);
    return this.userRepository.save(user);
  }

  async createdByPassengerUser(newUserDto: UserDTO): Promise<UpdatedUser> {
    const newUser = userFactory(newUserDto);
    if (newUser.role !== 'UsuarioPassageiro') {
      throw new Error('Usuário só pode se cadastrar como Passageiro');
    }
    return this.userRepository.save(newUser);
  }

  async createdByCompanyUser(newUserDto: UserCompanyDTO, user: TokenPayload): Promise<UpdatedUser> {
    if (newUserDto.companyId !== user.company.id) {
      throw new Error('Usuário só pode cadastrar usuário da mesma companhia rodoviária!');
    } else if (newUserDto.role !== user.role) {
      throw new Error('Usuário só pode cadastrar usuários de companhia rodoviária!');
    }
    const newUser = userFactory(newUserDto);
    return this.userRepository.save(newUser);
  }

  async update(userId: number, updatedUserDto: UpdateUser): Promise<UpdatedUser> {
    const userToUpdate = await this.userRepository.findOne(userId);
    return this.userRepository.save(updateUser(userToUpdate, updatedUserDto));
  }

  async delete(userId: number) {
    const userToRemove = await this.userRepository.findOne(userId);
    if (!userToRemove) {
      throw new Error('Usuário não encontrado!');
    }
    await this.userRepository.remove(userToRemove);
  }
}
