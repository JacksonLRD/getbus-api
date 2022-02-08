import { Company } from "models/CompanyEntity";
import { Role } from "../enums/Role";

export interface TokenPayload {
  id: number;
  name: string;
  company: Company;
  role: Role;
}
