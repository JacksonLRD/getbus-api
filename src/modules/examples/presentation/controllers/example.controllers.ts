import { Request, Response } from 'express';
import Container from 'typedi';
import IExampleService from '../../interfaces/services/iexample.service';

const exampleController = () => {
  const exampleService = Container.get<IExampleService>('ExampleService');

  const self = {
    findAll: async (req: Request, res: Response) => {
      try {
        const examples = await exampleService.findAll();
        if (!examples) return res.status(400).send('Examples not Found!');

        return res.status(200).json(examples);
      } catch (error) {
        return res.status(500).send(String(error));
      }
    },
  };
  return self;
};

export default exampleController();
