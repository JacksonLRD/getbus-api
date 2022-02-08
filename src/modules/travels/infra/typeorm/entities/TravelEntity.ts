import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Company from '../../../../companies/infra/typeorm/entities/CompanyEntity';

@Entity()
export default class Travel {
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
    nullable: true,
  })
  company?: Company;
}
