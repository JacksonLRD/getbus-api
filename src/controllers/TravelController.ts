/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ITravelService } from "../@types/services/ITravelService";
import { Request, Response } from "express";
import { Inject, Service } from "typedi";

@Service("TravelController")
export class TravelController {
  constructor(@Inject("TravelService") private travelService: ITravelService) {}

  async getAllWithCompany(req: Request, res: Response): Promise<void> {
    const companies = await this.travelService.getAllWithCompany();
    res.send(companies).status(200);
  }

  async getOneWithCompany(req: Request, res: Response): Promise<void> {
    const company = await this.travelService.getOneWithCompany(
      Number(req.params.id)
    );
    res.send(company).status(200);
  }

  async create(req: Request, res: Response): Promise<void> {
    const company = await this.travelService.create(
      Number(req.params.id),
      req.body
    );
    res.send(company).status(201);
  }

  async update(req: Request, res: Response): Promise<void> {
    const updatedCompany = await this.travelService.update(req.body);
    res.send(updatedCompany).status(200);
  }

  async remove(req: Request, res: Response): Promise<void> {
    await this.travelService.remove(Number(req.params.id));
    res.send().status(200);
  }
}
