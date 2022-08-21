import TokenPayload from '../../../users/interfaces/middlewares/TokenPayLoad';
import { TravelDTO } from '../../dtos/TravelDto';
import Travel from '../../infra/typeorm/entities/TravelEntity';

export default interface ITravelService {
  getAvailableSeats(travelId: number, user: TokenPayload): Promise<number>;
  getAllWithCompany(travelDto: TravelDTO, user: TokenPayload): Promise<Travel[]>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sellOneTicket(traveId: number): Promise<any>;
  create(newTravel: TravelDTO, user: TokenPayload): Promise<Travel>;
  update(updatedTravelDto): Promise<void>;
  remove(id: number): Promise<void>;
}
