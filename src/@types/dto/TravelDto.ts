export interface TravelDTO {
  id: number;
  origin: string;
  destination: string;
  takeOf?: Date;
  availableSeats: number;
  companyId?: number;
}

export interface FilterTravelDTO {
  origin?: string;
  destination?: string;
  takeOfOne?: Date;
  takeOfTwo?: Date;
  companyId: number;
}
