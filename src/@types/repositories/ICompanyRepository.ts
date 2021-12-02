import { CompanyDTO } from "../dto/CompanyDto";
import { Company } from "../../models/CompanyEntity";

export interface ICompanyRepository {
  find(): Promise<Company[]>;
  findOne(id: number): Promise<Company>;
  save(companyDto: CompanyDTO): Promise<Company>;
  remove(entities: CompanyDTO): Promise<Company>;
}
