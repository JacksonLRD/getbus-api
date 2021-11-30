import { CompanyDTO } from "../../@types/dto/CompanyDto";
import { Company } from "../../models/CompanyEntity";

export interface ICompanyService {
  list(): Promise<Company[]>;
  getById(id: number): Promise<Company>;
  create(companyDto: CompanyDTO): Promise<Company>;
  update(id: number, companyDto: CompanyDTO): Promise<void>;
  remove(id: number): Promise<void>;
}
