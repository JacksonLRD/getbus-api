import { Inject, Service } from 'typedi';
import ICompanyService from '../../interfaces/services/ICompanyService';
import ICompanyRepository from '../../interfaces/repositories/ICompanyRepository';
import Company from '../../infra/typeorm/entities/CompanyEntity';
import CompanyDTO from '../../dtos/CompanyDto';
import companyFactory from '../../factory/companyFactory';

@Service('CompanyService')
export default class CompanyService implements ICompanyService {
  constructor(
    @Inject('CompanyRepository')
    private companyRepository: ICompanyRepository
  ) {}

  async list(): Promise<Company[]> {
    const results = await this.companyRepository.find();
    return results;
  }

  async getById(id: number): Promise<Company> {
    const result = await this.companyRepository.findOne(id);
    return result;
  }

  async create(companyDto: CompanyDTO): Promise<Company> {
    const company = companyFactory(companyDto);
    const result = await this.companyRepository.save(company);
    return result;
  }

  async update(updatedCompanyDto: CompanyDTO): Promise<void> {
    const company = await this.companyRepository.findOne(updatedCompanyDto.id);
    const updatedCompany = { ...company, ...updatedCompanyDto };
    await this.companyRepository.save(updatedCompany);
  }

  async remove(id: number): Promise<void> {
    const companyToRemove = await this.companyRepository.findOne(id);
    await this.companyRepository.remove(companyToRemove);
  }
}
