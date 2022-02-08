import CompanyDTO from '../dtos/CompanyDto';
import Company from '../infra/typeorm/entities/CompanyEntity';

const companyFactory = (newCompany: CompanyDTO): Company => {
  const company = new Company();
  company.name = newCompany.name;
  return company;
};

export default companyFactory;
