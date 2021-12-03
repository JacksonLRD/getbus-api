import { Role } from "../enums/Role";

export interface UserDTO {
  id: number;
  name: string;
  email: string;
  password?: string;
  role?: Role;
  companyId?: number;
}
