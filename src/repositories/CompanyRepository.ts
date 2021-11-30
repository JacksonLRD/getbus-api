import { ICompanyRepository } from "../@types/repositories/ICompanyRepository";
import { Company } from "models/CompanyEntity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Company)
export class CompanyRepository
  extends Repository<Company>
  implements ICompanyRepository {}
