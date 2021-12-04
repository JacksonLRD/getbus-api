/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ITravelService } from "../@types/services/ITravelService";
import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import RequestWithUserData from "../infra/http/types/RequestWithUserData";
import { getFilters } from "../factories/travelFactory";

@Service("TravelController")
export class TravelController {
  constructor(@Inject("TravelService") private travelService: ITravelService) {}

  async getAllWithCompany(
    req: RequestWithUserData,
    res: Response
  ): Promise<void> {
    try {
      const { user } = req;
      const companies = await this.travelService.getAllWithCompany(
        getFilters(req),
        user
      );
      res.send(companies).status(200);
    } catch (error) {
      if (error instanceof Error) {
        res.status(422).send(error.message);
        return;
      }
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getOneWithCompany(req: Request, res: Response): Promise<void> {
    const company = await this.travelService.getOneWithCompany(
      Number(req.params.id)
    );
    res.send(company).status(200);
  }

  async create(req: RequestWithUserData, res: Response): Promise<void> {
    try {
      const { user } = req;
      const company = await this.travelService.create(req.body, user);
      res.status(201).send(company);
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
    const updatedCompany = await this.travelService.update(req.body);
    res.send(updatedCompany).status(200);
  }

  async remove(req: Request, res: Response): Promise<void> {
    await this.travelService.remove(Number(req.params.id));
    res.send().status(200);
  }
}
