import { Inject, Service } from 'typedi';
import ITravelService from '../../interfaces/services/ITravelService';
import ITravelRepository from '../../interfaces/repositories/ITravelRepository';
import Travel from '../../infra/typeorm/entities/TravelEntity';
import { TravelDTO } from '../../dtos/TravelDto';
import { travelFactory } from '../../factory/travelFactory';
import TokenPayload from '../../../users/interfaces/middlewares/TokenPayLoad';

@Service('TravelService')
export default class TravelService implements ITravelService {
  constructor(
    @Inject('TravelRepository')
    private travelRepository: ITravelRepository
  ) {}

  async getAllWithCompany(travelDto: TravelDTO, user: TokenPayload): Promise<Travel[]> {
    if (travelDto.companyId !== user.company.id) {
      throw new Error('Usuário só pode filtrar viagens da própra companhia rodoviária!');
    }
    const results = await this.travelRepository.getAllWithCompany(travelDto);
    return results;
  }

  async getAvailableSeats(travelId: number, user: TokenPayload): Promise<number> {
    const result = await this.travelRepository.getOneWithCompany(travelId);
    if (result.company.id !== user.company.id) {
      throw new Error('Usuário só pode buscar uma viagem da própra companhia rodoviária!');
    } else {
      const { availableSeats } = result;
      return availableSeats;
    }
  }

  async sellOneTicket(travelId: number): Promise<void> {
    const travelToSell = await this.travelRepository.findOne(travelId);
    travelToSell.availableSeats -= 1;
    await this.update(travelToSell);
  }

  async create(newTravel: TravelDTO, user: TokenPayload): Promise<Travel> {
    if (newTravel.companyId !== user.company.id) {
      throw new Error('Usuário só pode cadastrar uma viagem da própra companhia rodoviária!');
    }
    const travel = travelFactory(user.company.id, newTravel);
    return this.travelRepository.save(travel);
  }

  async update(updatedTravelDto: TravelDTO): Promise<void> {
    const travel = await this.travelRepository.findOne(updatedTravelDto.id);
    const updatedTravel = { ...travel, ...updatedTravelDto };
    await this.travelRepository.save(updatedTravel);
  }

  async remove(id: number): Promise<void> {
    const travelToRemove = await this.travelRepository.findOne(id);
    await this.travelRepository.remove(travelToRemove);
  }
}
