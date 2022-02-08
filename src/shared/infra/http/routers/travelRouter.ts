import { RequestHandler, Router } from 'express';
import Container from 'typedi';
import TravelController from '../../../../modules/travels/presentation/controller/TravelController';
import { userCompanyAuthorization } from '../middlewares/userAuthorization';
import RequestWithUserData from '../types/RequestWithUserData';

const router = Router();

const getController = (): TravelController => {
  return Container.get<TravelController>('TravelController');
};

const createRouter = (): Router => {
  router.get('', userCompanyAuthorization, (async (req: RequestWithUserData, res) => {
    await getController().getAllWithCompany(req, res);
  }) as RequestHandler);
  router.get('/:id', userCompanyAuthorization, (async (req: RequestWithUserData, res) => {
    await getController().getAvailableSeats(req, res);
  }) as RequestHandler);
  router.post('', userCompanyAuthorization, (async (req: RequestWithUserData, res) => {
    await getController().create(req, res);
  }) as RequestHandler);
  router.get('/sellATicket/:id', userCompanyAuthorization, (async (req, res) => {
    await getController().sellOneTicket(req, res);
  }) as RequestHandler);
  router.patch('', userCompanyAuthorization, (async (req: RequestWithUserData, res) => {
    await getController().update(req, res);
  }) as RequestHandler);
  router.delete('/:id', userCompanyAuthorization, (async (req: RequestWithUserData, res) => {
    await getController().remove(req, res);
  }) as RequestHandler);

  return router;
};

export default createRouter;
