import { ITravelService } from "../@types/services/ITravelService";
import { Inject, Service } from "typedi";
import { ITravelRepository } from "../@types/repositories/ITravelRepository";
import { Travel } from "../models/TravelEntity";
import { TravelDTO } from "../@types/dto/TravelDto";
import { travelFactory } from "../factories/travelFactory";

@Service("TravelService")
export class TravelService implements ITravelService {
  constructor(
    @Inject("TravelRepository")
    private travelRepository: ITravelRepository
  ) {}

  async getAllWithCompany(): Promise<Travel[]> {
    const results = await this.travelRepository.getAllWithCompany();
    return results;
  }

  async getOneWithCompany(travelId: number): Promise<Travel[]> {
    const result = await this.travelRepository.getOneWithCompany(travelId);
    return result;
  }

  async create(companyId: number, newTravel: TravelDTO): Promise<Travel> {
    const travel = travelFactory(companyId, newTravel);
    return await this.travelRepository.save(travel);
  }

  async update(updatedTravelDto: TravelDTO): Promise<void> {
    const travel = await this.travelRepository.findOne(updatedTravelDto.id);
    const updatedTravel = { ...travel, ...updatedTravelDto };
    await this.travelRepository.save(updatedTravel);
  }

  async remove(id: number): Promise<void> {
    const travelToRemove = await this.travelRepository.findOne(id);
    await this.travelRepository.remove(travelToRemove);
  }
}
