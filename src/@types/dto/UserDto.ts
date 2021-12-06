import { Role } from "../enums/Role";

export interface UserDTO {
  id?: number;
  name: string;
  email: string;
  password?: string;
  role: Role;
  companyId?: number;
}

export interface UserCompanyDTO {
  id: number;
  name: string;
  email: string;
  password?: string;
  role: Role.CompanyUser;
  companyId: number;
}
export interface UpdateUser {
  id: number;
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
  companyId?: number;
}

export interface LoginData {
  email: string;
  password: string;
}
