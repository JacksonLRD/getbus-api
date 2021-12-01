import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Role } from "../@types/enums/Role";
import { Company } from "./CompanyEntity";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  hashPassword: string;

  @Column({ type: "enum", enum: Role, default: Role.PassengerUser })
  role: Role;

  @ManyToOne(() => Company, company => company.users)
  companies: Company;
}
