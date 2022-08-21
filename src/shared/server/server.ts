import * as dotenv from 'dotenv';
import { NODE_ENV_NOT_DEFINED } from '../constants/env.constants';
import createDevServer from './server.dev';
import createProdServer from './server.prod';

dotenv.config();

const { NODE_ENV } = process.env;
if (!NODE_ENV) throw new Error(NODE_ENV_NOT_DEFINED);

const createServer = NODE_ENV === 'development' ? createDevServer : createProdServer;
export default createServer;
