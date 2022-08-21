import ExampleDTO from '../../dto/example.dto';

export default interface IExampleRepository {
  findAll(): Promise<ExampleDTO[]>;
}
