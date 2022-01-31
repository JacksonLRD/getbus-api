import { CompanyDTO } from "../dto/CompanyDto";
import { Company } from "../../models/CompanyEntity";

export interface ICompanyService {
  list(): Promise<Company[]>;
  getById(id: number): Promise<Company>;
  create(companyDto: CompanyDTO): Promise<Company>;
  update(updatedCompanyDto): Promise<void>;
  remove(id: number): Promise<void>;
}
