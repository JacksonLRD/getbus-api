/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { IUserService } from "../@types/services/IUserService";

@Service("UserController")
export class UserController {
  constructor(@Inject("UserService") private userService: IUserService) {}

  async listWithCompany(req: Request, res: Response): Promise<void> {
    const users = await this.userService.listWithCompany();
    res.send(users).status(200);
  }

  async getWithCompany(req: Request, res: Response): Promise<void> {
    const user = await this.userService.getWithCompany(Number(req.params.id));
    res.send(user).status(200);
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = await this.userService.create(req.body);
    res.send(user).status(201);
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
