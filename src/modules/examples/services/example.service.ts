import { Inject, Service } from 'typedi';
import ExampleDTO from '../dto/example.dto';
import IExampleRepository from '../interfaces/repositories/iexample.repository';
import IExampleService from '../interfaces/services/iexample.service';

@Service('ExampleService')
export default class ExampleService implements IExampleService {
  constructor(@Inject('ExampleRepository') private exampleRepository: IExampleRepository) {}

  public async findAll(): Promise<ExampleDTO[]> {
    const examples = await this.exampleRepository.findAll();
    if (!examples) throw new Error('Examples not Found!');

    return examples;
  }
}
