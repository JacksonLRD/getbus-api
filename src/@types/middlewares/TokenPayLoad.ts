import { Company } from "models/CompanyEntity";
import { Role } from "../../@types/enums/Role";

export interface TokenPayload {
  id: number;
  name: string;
  company: Company;
  role: Role;
}
