import * as express from 'express';
import createUserRouter from './userRouter';
import createCompanyRouter from './companyRouter';
import createTravelRouter from './travelRouter';
import userAuthentication from '../middlewares/userAuthentication';

const createRouters = (app: express.Express) => {
  app.use('/users', createUserRouter());
  app.use('/companies', userAuthentication, createCompanyRouter());
  app.use('/travels', userAuthentication, createTravelRouter());
};

export default createRouters;
