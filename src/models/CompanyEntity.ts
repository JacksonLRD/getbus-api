import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import { Travel } from "./TravelEntity";
import { User } from "./UserEntity";

@Entity()
export class Company {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => User, user => user.companies, {
    cascade: ["insert", "update"]
  })
  users: User[];

  @ManyToMany(() => Travel, travel => travel.companies)
  travels: Travel[];
}
