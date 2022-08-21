import 'reflect-metadata';
import './infra/dependencies/container.injector';

import * as dotenv from 'dotenv';
import express from 'express';

import createDatabaseConnection from './infra/database/connect';
import createMiddlewares from './infra/middlewares';
import createServer from './server/server';

dotenv.config();

const start = async (): Promise<void> => {
  try {
    await createDatabaseConnection();

    const app = express();
    createMiddlewares(app);
    createServer(app);
  } catch (error) {
    console.error('Fatal error: ', error);
  }
};

start();
