import { TravelDTO } from "../../@types/dto/TravelDto";
import { Travel } from "../../models/TravelEntity";

export interface ITravelRepository {
  findOne(id: number): Promise<Travel>;
  getOneWithCompany(travelId: number): Promise<Travel[]>;
  getAllWithCompany(travelDto: TravelDTO): Promise<Travel[]>;
  save(travelDto: TravelDTO): Promise<Travel>;
  remove(entities: Travel | Travel[]): Promise<Travel[]>;
}
