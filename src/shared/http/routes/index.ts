import { Router } from 'express';
import exampleRouter from './example.routes';

const routes = Router();

routes.use('/examples', exampleRouter);

export default routes;
