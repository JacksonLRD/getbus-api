import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Travel from '../../../../travels/infra/typeorm/entities/TravelEntity';
import User from '../../../../users/infra/typeorm/entities/UserEntity';

@Entity()
export default class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.company, {
    cascade: ['insert', 'update'],
  })
  users?: User[];

  @OneToMany(() => Travel, (travel) => travel.company, { nullable: true })
  travels?: Travel[];
}
