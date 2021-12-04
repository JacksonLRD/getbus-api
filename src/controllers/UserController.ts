/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { IUserService } from "../@types/services/IUserService";
import { LoginData } from "../@types/dto/UserDto";
import RequestWithUserData from "../infra/http/types/RequestWithUserData";

@Service("UserController")
export class UserController {
  constructor(@Inject("UserService") private userService: IUserService) {}

  async authenticate(
    req: Request,
    res: Response
  ): Promise<Response<{ token: string } | string>> {
    try {
      const { email, password } = req.body as LoginData;
      const token = await this.userService.authenticate(email, password);
      if (token) {
        return res.send({ token }).status(200);
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(422).send(error.message);
        return;
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
    const user = await this.userService.createdByAdmin(req.body);
    res.send(user).status(201);
  }

  async createdByCompanyUser(
    req: RequestWithUserData,
    res: Response
  ): Promise<void> {
    try {
      const { user } = req;
      const newUser = await this.userService.createdByCompanyUser(
        req.body,
        user
      );
      res.status(201).send(newUser);
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(422).send(error.message);
        return;
      }
      res.status(500).send("Erro interno do servidor");
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const updatedUser = await this.userService.update(req.body);
    res.send(updatedUser).status(200);
  }

  async delete(req: Request, res: Response): Promise<void> {
    await this.userService.delete(Number(req.params.id));
    res.send().status(200);
  }
}
