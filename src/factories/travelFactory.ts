import { Travel } from "../models/TravelEntity";
import { TravelDTO } from "../types/dto/TravelDto";
import { Company } from "../models/CompanyEntity";
import { Request } from "express";

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
  travel.availableSeats = newTravel.availableSeats;
  travel.company = company;

  return travel;
};

export const getQueryFilters = (req: Request): TravelDTO => {
  const companyId = Number(req.query.companyId);
  const takeOf = String(req.query.takeOf);
  const destination = String(req.query.destination);
  const origin = String(req.query.origin);
  const filterTravel = new Travel();
  filterTravel.origin = origin;
  filterTravel.destination = destination;
  filterTravel.takeOf = new Date(takeOf);
  const company = new Company();
  company.id = companyId;
  filterTravel.company = company;
  return filterTravel;
};
