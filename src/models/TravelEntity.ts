import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Company } from "./CompanyEntity";

@Entity()
export class Travel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column({ nullable: true })
  takeOf?: Date;

  @Column()
  availableSeats: number;

  @ManyToOne(() => Company, (company) => company.travels, {
    cascade: true,
    nullable: true,
  })
  company?: Company;
}
