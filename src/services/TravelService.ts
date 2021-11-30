import { ITravelService } from "../@types/services/ITravelService";
import { Inject, Service } from "typedi";
import { ITravelRepository } from "../@types/repositories/ITravelRepository";
import { Travel } from "../models/TravelEntity";

@Service("TravelService")
export class TravelService implements ITravelService {
  constructor(
    @Inject("TravelRepository")
    private travelRepository: ITravelRepository
  ) {}

  list(): Promise<Travel[]> {
    throw new Error("Method not implemented.");
  }

  getById(): Promise<Travel> {
    throw new Error("Method not implemented.");
  }

  create(): Promise<Travel> {
    throw new Error("Method not implemented.");
  }
}
