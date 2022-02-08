import CompanyDTO from '../../dtos/CompanyDto';
import Company from '../../infra/typeorm/entities/CompanyEntity';

export default interface ICompanyRepository {
  find(): Promise<Company[]>;
  findOne(id: number): Promise<Company>;
  save(companyDto: CompanyDTO): Promise<Company>;
  remove(entities: CompanyDTO): Promise<Company>;
}
