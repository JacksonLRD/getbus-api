import { Role } from "../enums/Role";
import { CompanyDTO } from "./CompanyDto";

export interface UserDTO {
  id: number;
  name: string;
  email: string;
  password: number;
  role?: Role;
  company?: CompanyDTO;
}
