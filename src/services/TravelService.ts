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

  async list(): Promise<Travel[]> {
    const results = await this.travelRepository.find();
    return results;
  }

  async getById(id: number): Promise<Travel> {
    const result = await this.travelRepository.findOne(id);
    return result;
  }

  async create(newTravel: TravelDTO): Promise<Travel> {
    const travel = travelFactory(newTravel);
    return await this.travelRepository.save(travel);
  }

  async update(id: number, updatedTravel: TravelDTO): Promise<void> {
    await this.travelRepository.save({ ...updatedTravel, id });
  }

  async remove(id: number): Promise<void> {
    const travelToRemove = await this.travelRepository.findOne(id);
    await this.travelRepository.remove(travelToRemove);
  }
}
