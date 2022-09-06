import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import * as fs from 'fs/promises';

import { NODE_ENV_NOT_DEFINED } from '../constants/env.constants';
import AppError from '../errors/AppError';

const createMiddlewares = async (app: express.Express): Promise<void> => {
  const { NODE_ENV } = process.env;
  if (!NODE_ENV) throw new Error(NODE_ENV_NOT_DEFINED);

  const swaggerFile = './src/shared/infra/swagger/swagger.json';
  const swaggerDocument = JSON.parse(await fs.readFile(swaggerFile, 'utf8'));

  app.use(cors());
  app.use(express.json({ type: 'application/json' }), express.urlencoded({ extended: true }));
  app.use(morgan(NODE_ENV === 'development' ? 'dev' : 'combined'));
  // app.use(routes);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return res.status(error.status).json({ status: 'error', message: error.message });
    }
    return next(error);
  });
};

export default createMiddlewares;
