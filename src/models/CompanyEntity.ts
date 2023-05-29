import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Travel } from "./TravelEntity";
import { User } from "./UserEntity";

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.company, {
    cascade: ["insert", "update"],
  })
  users?: User[];

  @OneToMany(() => Travel, (travel) => travel.company, { nullable: true })
  travels?: Travel[];
}
