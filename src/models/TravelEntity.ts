import {Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany} from "typeorm";
import { Company } from "./CompanyEntity";

@Entity()
export class Travel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column()
  take_of: Date;

  @Column()
  avaliable_seats: number;

  @ManyToMany(() => Company, company => company.travels)
  @JoinTable()
  companies: Company[];
}
