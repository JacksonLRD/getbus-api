import CompanyDTO from '../../companies/dtos/CompanyDto';
import Role from '../enums/Role';

export default interface TokenPayload {
  id: number;
  name: string;
  company: CompanyDTO;
  role: Role;
}
