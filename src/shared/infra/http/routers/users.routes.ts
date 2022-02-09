import { Router } from 'express';
import createUserController from '../../../../modules/users/presentation/controller/createUserController';

const usersRouter = Router();

usersRouter.post('/passenger', createUserController.createPassenger);

export default usersRouter;
