import { Travel } from "../models/TravelEntity";
import { TravelDTO } from "../@types/dto/TravelDto";
import { companyFactory } from "./companyFactory";

export const travelFactory = (newTravel: TravelDTO): Travel => {
  const travel = new Travel();
  travel.origin = newTravel.origin;
  travel.destination = newTravel.destination;
  travel.takeOf = newTravel.takeOf;
  travel.avaliableSeats = newTravel.avaliableSeats;
  travel.company = companyFactory(newTravel.company);

  return travel;
};
