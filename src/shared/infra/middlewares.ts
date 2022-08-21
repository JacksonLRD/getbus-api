import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from '../http/routes';
import { NODE_ENV_NOT_DEFINED } from '../constants/env.constants';

const createMiddlewares = (app: express.Express): void => {
  const { NODE_ENV } = process.env;
  if (!NODE_ENV) throw new Error(NODE_ENV_NOT_DEFINED);

  app.use(cors());
  app.use(express.json());
  app.use(morgan(NODE_ENV === 'development' ? 'dev' : 'combined'));
  app.use(routes);
};

export default createMiddlewares;
