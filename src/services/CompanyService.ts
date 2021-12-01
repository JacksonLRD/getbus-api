import { ICompanyService } from "../@types/services/ICompanyService";
import { Inject, Service } from "typedi";
import { ICompanyRepository } from "../@types/repositories/ICompanyRepository";
import { Company } from "../models/CompanyEntity";
import { CompanyDTO } from "../@types/dto/CompanyDto";
import { companyFactory } from "factories/companyFactory";

@Service("CompanyService")
export class CompanyService implements ICompanyService {
  constructor(
    @Inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async list(): Promise<Company[]> {
    const results = await this.companyRepository.find();
    return results;
  }

  async getById(id: number): Promise<Company> {
    const result = await this.companyRepository.findOne(id);
    if(!result) {
      throw new Error("Companhia não encontrada");
    }
    return result;
  }

  async create(companyDto: CompanyDTO): Promise<Company> {
    const company = companyFactory(companyDto);
    const result = await this.companyRepository.save(company);
    return result;
  }

  async update(id: number, companyDto: CompanyDTO): Promise<void> {
    await this.companyRepository.update(id, companyDto)
    // const company = await this.companyRepository.findOne(id);
    // await this.companyRepository.save({ ...company, ...companyDto});
  }

  async remove(id: number): Promise<void> {
    const company = await this.getById(id);
    await this.companyRepository.remove(company);
  }
}
