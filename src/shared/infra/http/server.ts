import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as express from 'express';

import * as cors from 'cors';
import * as morgan from 'morgan';
// import createDatabaseConnection from '../typeorm/connect';
import createDependencyInjector from '../../container/createInjector';
// import createRouters from './routers';
import routes from './routers';

dotenv.config();

const createMiddlewares = (app: express.Express) => {
  app.use(cors());
  app.use(express.json({ limit: '5mb' }));
  app.use(morgan('dev'));
  app.use(routes);
};

const createApp = (): express.Express => {
  const app = express();
  createMiddlewares(app);
  // createRouters(app);

  return app;
};

const createServer = (app: express.Express) => {
  const { PORT } = process.env;
  app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
  });
};

const start = async () => {
  try {
    // await createDatabaseConnection();
    createDependencyInjector();
    const app = createApp();

    createServer(app);
  } catch (error) {
    console.error('Fatal error: ', error);
  }
};

export default start();
