import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Role } from "../@types/enums/Role";

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
}
