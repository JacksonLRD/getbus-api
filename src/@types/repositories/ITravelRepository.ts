import { TravelDTO } from "../../@types/dto/TravelDto";
import { Travel } from "../../models/TravelEntity";

export interface ITravelRepository {
  find(): Promise<Travel[]>;
  findOne(id: number): Promise<Travel>;
  save(travelDto: TravelDTO): Promise<Travel>;
  remove(entities: Travel | Travel[]): Promise<Travel[]>;
}
