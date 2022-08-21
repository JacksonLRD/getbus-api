import CompanyDTO from '../../dtos/CompanyDto';
import Company from '../../infra/typeorm/entities/CompanyEntity';

export default interface ICompanyService {
  list(): Promise<Company[]>;
  getById(id: number): Promise<Company>;
  create(companyDto: CompanyDTO): Promise<Company>;
  update(updatedCompanyDto): Promise<void>;
  remove(id: number): Promise<void>;
}
