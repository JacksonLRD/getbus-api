import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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
}
