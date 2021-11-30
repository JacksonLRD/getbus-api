import { TravelDTO } from "../../@types/dto/TravelDto";
import { Travel } from "../../models/TravelEntity";

export interface ITravelService {
  list(): Promise<Travel[]>;
  getById(id: number): Promise<Travel>;
  create(travelDto: TravelDTO): Promise<Travel>;
}
