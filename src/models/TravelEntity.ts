import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
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

  @ManyToOne(() => Company, company => company.travel)
  company: Company;
}
