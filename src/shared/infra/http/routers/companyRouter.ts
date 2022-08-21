import { RequestHandler, Router } from 'express';
import Container from 'typedi';
import CompanyController from '../../../../modules-depreciated/companies/presentation/controller/CompanyController';
import { userAdminAuthorization } from '../middlewares/userAuthorization';
import RequestWithUserData from '../types/RequestWithUserData';

const router = Router();

const getController = (): CompanyController => {
  return Container.get<CompanyController>('CompanyController');
};

const createRouter = () => {
  router.get('', userAdminAuthorization, (async (req: RequestWithUserData, res) => {
    await getController().list(req, res);
  }) as RequestHandler);
  router.get('/:id', userAdminAuthorization, (async (req: RequestWithUserData, res) => {
    await getController().getById(req, res);
  }) as RequestHandler);
  router.post('', userAdminAuthorization, (async (req: RequestWithUserData, res) => {
    await getController().create(req, res);
  }) as RequestHandler);
  router.patch('', userAdminAuthorization, (async (req: RequestWithUserData, res) => {
    await getController().update(req, res);
  }) as RequestHandler);
  router.delete('/:id', userAdminAuthorization, (async (req: RequestWithUserData, res) => {
    await getController().remove(req, res);
  }) as RequestHandler);

  return router;
};

export default createRouter;
