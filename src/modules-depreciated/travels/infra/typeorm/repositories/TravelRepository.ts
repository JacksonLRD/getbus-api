import { EntityRepository, Repository } from 'typeorm';
import ITravelRepository from '../../../interfaces/repositories/ITravelRepository';
import Travel from '../entities/TravelEntity';
import { TravelDTO } from '../../../dtos/TravelDto';

@EntityRepository(Travel)
export default class TravelRepository extends Repository<Travel> implements ITravelRepository {
  getOneWithCompany(travelId: number): Promise<Travel> {
    return this.findOne({
      relations: ['company'],
      where: { id: travelId },
    });
  }

  getAllWithCompany(travelDto: TravelDTO): Promise<Travel[]> {
    return this.find({
      relations: ['company'],
      where: {
        origin: travelDto.origin,
        destination: travelDto.destination,
        takeOf: travelDto.takeOf,
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sellOneTicket(traveId: number): Promise<any> {
    return this.createQueryBuilder()
      .update(Travel)
      .where({ id: traveId })
      .set({ availableSeats: () => 'availableSeats - 1' })
      .execute();
  }
}
