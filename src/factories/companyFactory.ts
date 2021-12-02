import { CompanyDTO } from "../@types/dto/CompanyDto";
import { Company } from "../models/CompanyEntity";

export const companyFactory = (newCompany: CompanyDTO): Company => {
  const company = new Company();
  company.name = newCompany.name;
  return company;
};
