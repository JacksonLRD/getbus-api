import { TravelDTO } from "../../@types/dto/TravelDto";
import { Travel } from "../../models/TravelEntity";

export interface ITravelService {
  list(): Promise<Travel[]>;
  getById(id: number): Promise<Travel>;
  create(newTravel: TravelDTO): Promise<Travel>;
  update(id: number, updatedTravel: TravelDTO): Promise<void>;
  remove(id: number): Promise<void>;
}
