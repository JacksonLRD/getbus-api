export default class User {
  public readonly id!: string;

  public name!: string;

  public email!: string;

  public password!: string;

  public role!: 'ADMIN' | 'COMPANY_USER';

  public companyId?: string | undefined;
}
