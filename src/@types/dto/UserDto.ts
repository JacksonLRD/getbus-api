import { Role } from "../enums/Role";

export interface UserDTO {
  id: number;
  name: string;
  email: string;
  password: number;
  role?: Role;
  companyId?: number;
}
