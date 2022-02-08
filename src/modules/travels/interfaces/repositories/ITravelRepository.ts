import { TravelDTO } from '../../dtos/TravelDto';
import Travel from '../../infra/typeorm/entities/TravelEntity';

export default interface ITravelRepository {
  findOne(id: number): Promise<Travel>;
  getOneWithCompany(travelId: number): Promise<Travel>;
  getAllWithCompany(travelDto: TravelDTO): Promise<Travel[]>;
  save(travelDto: TravelDTO): Promise<Travel>;
  remove(entities: Travel | Travel[]): Promise<Travel[]>;
}
