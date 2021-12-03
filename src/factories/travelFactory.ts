import { Travel } from "../models/TravelEntity";
import { TravelDTO } from "../@types/dto/TravelDto";
import { Company } from "../models/CompanyEntity";

export const travelFactory = (
  companyId: number,
  newTravel: TravelDTO
): Travel => {
  const company = new Company();
  company.id = companyId;
  const travel = new Travel();
  travel.origin = newTravel.origin;
  travel.destination = newTravel.destination;
  travel.takeOf = new Date(newTravel.takeOf);
  travel.avaliableSeats = newTravel.avaliableSeats;
  travel.company = company;

  return travel;
};
