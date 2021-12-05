/* eslint-disable @typescript-eslint/unbound-method */
import { CompanyDTO } from "../../@types/dto/CompanyDto";
import * as faker from "faker";
import { CompanyRepository } from "../../repositories/CompanyRepository";
import { CompanyService } from "../CompanyService";

describe("CompanyService", () => {
  let companyDto: CompanyDTO;
  let companyRepository: CompanyRepository;
  let companyService: CompanyService;

  beforeEach(jest.clearAllMocks);
  beforeEach(() => {
    companyDto = {
      id: faker.datatype.number(),
      name: faker.datatype.string(),
    };
    companyRepository = new CompanyRepository();
    companyService = new CompanyService(companyRepository);
  });

  describe("list", () => {
    it("Deve listar todas as companhias", async () => {
      jest.spyOn(companyRepository, "find").mockResolvedValue(null);
      await companyService.list();

      expect(companyRepository.find).toHaveBeenCalled();
    });
  });

  describe("getById", () => {
    it("Deve buscar uma companhia pelo seu id", async () => {
      const id = faker.datatype.number();
      jest.spyOn(companyRepository, "findOne").mockResolvedValue(null);
      await companyService.getById(id);

      expect(companyRepository.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe("create", () => {
    it("Deve criar uma nova companhia", async () => {
      jest.spyOn(companyRepository, "save").mockResolvedValue(null);
      await companyService.create(companyDto);

      expect(companyRepository.save).toHaveBeenCalledWith(companyDto);
    });
  });

  describe("update", () => {
    it("Deve atualizar uma companhia", async () => {
      const id = faker.datatype.number();
      jest.spyOn(companyRepository, "save").mockResolvedValue(null);
      await companyService.update(companyDto);

      expect(companyRepository.save).toHaveBeenCalledWith({
        ...companyDto,
        id,
      });
    });
  });
});
