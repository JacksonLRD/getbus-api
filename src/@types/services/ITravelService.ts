import { TravelDTO } from "../../@types/dto/TravelDto";
import { Travel } from "../../models/TravelEntity";

export interface ITravelService {
  getOneWithCompany(travelId: number): Promise<Travel[]>;
  getAllWithCompany(): Promise<Travel[]>;
  create(companyId: number, newTravel: TravelDTO): Promise<Travel>;
  update(updatedTravelDto): Promise<void>;
  remove(id: number): Promise<void>;
}
