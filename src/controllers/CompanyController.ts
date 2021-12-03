/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ICompanyService } from "../@types/services/ICompanyService";
import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import RequestWithUserData from "../infra/http/types/RequestWithUserData";

@Service("CompanyController")
export class CompanyController {
  constructor(
    @Inject("CompanyService") private companyService: ICompanyService
  ) {}

  async list(req: RequestWithUserData, res: Response): Promise<void> {
    const companies = await this.companyService.list();
    res.send(companies).status(200);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const company = await this.companyService.getById(Number(req.params.id));
    res.send(company).status(200);
  }

  async create(req: Request, res: Response): Promise<void> {
    const company = await this.companyService.create(req.body);
    res.send(company).status(201);
  }

  async update(req: Request, res: Response): Promise<void> {
    const updatedCompany = await this.companyService.update(req.body);
    res.send(updatedCompany).status(200);
  }

  async remove(req: Request, res: Response): Promise<void> {
    await this.companyService.remove(Number(req.params.id));
    res.send().status(200);
  }
}
