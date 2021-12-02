import { TravelDTO } from "./TravelDto";
import { UserDTO } from "./UserDto";

export interface CompanyDTO {
  id: number;
  name: string;
  travel?: TravelDTO;
  user?: UserDTO;
}
