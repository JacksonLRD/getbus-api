import ExampleDTO from '../../dto/example.dto';

export default interface IExampleService {
  findAll(): Promise<ExampleDTO[]>;
}
