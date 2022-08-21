import { EntityRepository, Repository } from 'typeorm';
import ICompanyRepository from '../../../interfaces/repositories/ICompanyRepository';
import Company from '../entities/CompanyEntity';

@EntityRepository(Company)
export default class CompanyRepository extends Repository<Company> implements ICompanyRepository {}
