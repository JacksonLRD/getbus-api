import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Role from '../../../enums/Role';
import Company from '../../../../companies/infra/typeorm/entities/CompanyEntity';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  hashPassword: string;

  @Column({ type: 'enum', enum: Role })
  role: Role;

  @ManyToOne(() => Company, (company) => company.users, { nullable: true })
  company: Company;
}
