import { Service } from 'typedi';
import IExampleRepository from '../interfaces/repositories/iexample.repository';
import ExampleDTO from '../dto/example.dto';

@Service('ExampleRepository')
export default class ExampleRepository implements IExampleRepository {
  private example: ExampleDTO[] = [
    {
      exampleResponse: 'Exemplo de resposta 01',
    },
    {
      exampleResponse: 'Exemplo de resposta 02',
    },
  ];

  public async findAll(): Promise<ExampleDTO[]> {
    return this.example;
  }
}
