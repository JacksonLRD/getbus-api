import { ICompanyService } from "../@types/services/ICompanyService";
import { Inject, Service } from "typedi";
import { ICompanyRepository } from "../@types/repositories/ICompanyRepository";
import { Company } from "../models/CompanyEntity";

@Service("CompanyService")
export class CompanyService implements ICompanyService {
  constructor(
    @Inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  list(): Promise<Company[]> {
    throw new Error("Method not implemented.");
  }

  getById(): Promise<Company> {
    throw new Error("Method not implemented.");
  }

  create(): Promise<Company> {
    throw new Error("Method not implemented.");
  }

  update(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  remove(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
