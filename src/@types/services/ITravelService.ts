import { TokenPayload } from "../../@types/middlewares/tokenPayLoad";
import { TravelDTO } from "../../@types/dto/TravelDto";
import { Travel } from "../../models/TravelEntity";

export interface ITravelService {
  getAvailableSeats(travelId: number, user: TokenPayload): Promise<number>;
  getAllWithCompany(
    travelDto: TravelDTO,
    user: TokenPayload
  ): Promise<Travel[]>;
  sellOneTicket(traveId: number): Promise<any>;
  create(newTravel: TravelDTO, user: TokenPayload): Promise<Travel>;
  update(updatedTravelDto): Promise<void>;
  remove(id: number): Promise<void>;
}
