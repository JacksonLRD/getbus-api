import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Travel } from "./TravelEntity";
import { User } from "./UserEntity";

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.companies, {
    cascade: ["insert", "update"],
    nullable: true,
  })
  users: User[];

  @OneToMany(() => Travel, (travel) => travel.company, { nullable: true })
  travels: Travel[];
}
