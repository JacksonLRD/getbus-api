import { CompanyDTO } from "./CompanyDto";

export interface TravelDTO {
  id: number;
  origin: string;
  destination: string;
  takeOf: Date;
  avaliableSeats: number;
  company?: CompanyDTO;
}
