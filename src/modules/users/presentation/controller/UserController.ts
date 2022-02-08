/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Inject, Service } from 'typedi';
import { Request, Response } from 'express';
import IUserService from '../../interfaces/services/IUserService';
import { LoginData } from '../../dtos/UserDto';
import RequestWithUserData from '../../../../shared/infra/http/types/RequestWithUserData';

@Service('UserController')
export default class UserController {
  constructor(@Inject('UserService') private userService: IUserService) {}

  // eslint-disable-next-line consistent-return
  async authenticate(req: Request, res: Response): Promise<Response<{ token: string } | string>> {
    try {
      const { email, password } = req.body as LoginData;
      const token = await this.userService.authenticate(email, password);
      if (token) {
        return res.send({ token }).status(200);
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(422).send(error.message);
      }
    }
  }

  async listWithCompany(req: Request, res: Response): Promise<void> {
    const users = await this.userService.listWithCompany();
    res.send(users).status(200);
  }

  async getWithCompany(req: Request, res: Response): Promise<void> {
    const user = await this.userService.getWithCompany(Number(req.params.id));
    res.send(user).status(200);
  }

  async createdByAdmin(req: Request, res: Response): Promise<void> {
    try {
      const newUser = await this.userService.createdByAdmin(req.body);
      res.send(newUser).status(201);
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(422).send(error.message);
        return;
      }
      res.status(500).send('Erro interno do servidor');
    }
  }

  async createdByPassengerUser(req: RequestWithUserData, res: Response): Promise<void> {
    try {
      const newUser = await this.userService.createdByPassengerUser(req.body);
      console.log(req.body);
      res.send(newUser).status(201);
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(422).send(error.message);
        return;
      }
      res.status(500).send('Erro interno do servidor');
    }
  }

  async createdByCompanyUser(req: RequestWithUserData, res: Response): Promise<void> {
    try {
      const { user } = req;
      const newUser = await this.userService.createdByCompanyUser(req.body, user);
      res.status(201).send(newUser);
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(422).send(error.message);
        return;
      }
      res.status(500).send('Erro interno do servidor');
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const userId = Number(req.params.id);
    const updatedUser = await this.userService.update(userId, req.body);
    res.send(updatedUser).status(200);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const userId = Number(req.params.id);
    await this.userService.delete(userId);
    res.send().status(200);
  }
}
