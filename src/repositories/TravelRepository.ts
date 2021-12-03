import { ITravelRepository } from "../@types/repositories/ITravelRepository";
import { Travel } from "../models/TravelEntity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Travel)
export class TravelRepository
  extends Repository<Travel>
  implements ITravelRepository
{
  getOneWithCompany(travelId: number): Promise<Travel[]> {
    return this.find({
      relations: ["company"],
      where: { id: travelId },
    });
  }

  getAllWithCompany(): Promise<Travel[]> {
    return this.find({
      relations: ["company"],
    });
  }
}
