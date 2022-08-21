import { RequestHandler, Router } from 'express';
import Container from 'typedi';
import UserController from '../../../../modules-depreciated/users/presentation/controller/UserController';
import { userAdminAuthorization, userCompanyAuthorization } from '../middlewares/userAuthorization';
import userAuthentication from '../middlewares/userAuthentication';
import RequestWithUserData from '../types/RequestWithUserData';

const router = Router();

const getController = (): UserController => {
  return Container.get<UserController>('UserController');
};

const createRouter = (): Router => {
  router.post('/sing-in', (async (req, res) => {
    await getController().authenticate(req, res);
  }) as RequestHandler);

  router.get('/list', userAuthentication, userAdminAuthorization, (async (req, res) => {
    await getController().listWithCompany(req, res);
  }) as RequestHandler);

  router.get('/:id/find', userAuthentication, userAdminAuthorization, (async (req, res) => {
    await getController().getWithCompany(req, res);
  }) as RequestHandler);

  router.post('/new-admin', userAuthentication, userAdminAuthorization, (async (req, res) => {
    await getController().createdByAdmin(req, res);
  }) as RequestHandler);

  router.post('/new-passenger', (async (req: RequestWithUserData, res) => {
    await getController().createdByPassengerUser(req, res);
  }) as RequestHandler);

  router.post('/new-company-user', userAuthentication, userCompanyAuthorization, (async (
    req: RequestWithUserData,
    res
  ) => {
    await getController().createdByCompanyUser(req, res);
  }) as RequestHandler);

  router.patch('/:id/edit', userAuthentication, userAdminAuthorization, (async (req, res) => {
    await getController().update(req, res);
  }) as RequestHandler);

  router.delete('/:id/delete', userAuthentication, userAdminAuthorization, (async (req, res) => {
    await getController().delete(req, res);
  }) as RequestHandler);

  return router;
};

export default createRouter;
