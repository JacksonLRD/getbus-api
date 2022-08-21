import { Response } from 'express';
import Container from 'typedi';
import RequestWithUserData from '../../../../shared/infra/http/types/RequestWithUserData';
import UserService from '../../application/services/UserService';

const createUserController = () => {
  const self = {
    createPassenger: async (req: RequestWithUserData, res: Response) => {
      try {
        const getService = (): UserService => {
          return Container.get<UserService>('UserService');
        };

        const newUser = await getService().createdByPassengerUser(req.body);
        res.send(newUser).status(201);
        return;
      } catch (error) {
        if (error instanceof Error) {
          res.status(422).send(error.message);
          return;
        }
        res.status(500).send('Erro interno do servidor');
      }
    },
  };

  return self;
};

export default createUserController();
