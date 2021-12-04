import { ITravelRepository } from "../@types/repositories/ITravelRepository";
import { Travel } from "../models/TravelEntity";
import { EntityRepository, Repository } from "typeorm";
import { TravelDTO } from "../@types/dto/TravelDto";

@EntityRepository(Travel)
export class TravelRepository
  extends Repository<Travel>
  implements ITravelRepository
{
  getOneWithCompany(travelId: number): Promise<Travel> {
    return this.findOne({
      relations: ["company"],
      where: { id: travelId },
    });
  }

  getAllWithCompany(travelDto: TravelDTO): Promise<Travel[]> {
    return this.find({
      relations: ["company"],
      where: {
        origin: travelDto.origin,
        destination: travelDto.destination,
        takeOf: travelDto.takeOf,
      },
    });
  }
}
