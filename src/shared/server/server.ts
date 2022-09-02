import 'express-async-errors';
import 'reflect-metadata';
// import '../infra/dependencies/dependencyInjector';
import 'dotenv/config';
import express from 'express';
import { Socket } from 'net';

import createMiddlewares from '../infra/middlewares';

let connections: Socket[] = [];
const port = process.env.PORT || 3000;
const app = express();

createMiddlewares(app);

export const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

server.on('connection', (connection) => {
  connections.push(connection);
  connection.on('close', () => connections.filter((current) => current !== connection));
});

function shutDown(event: string) {
  return (code: number | string) => {
    console.info(`Received kill signal, shutting down gracefully.\nEvent: ${event}\nCode: ${code}`);
    server.close(() => {
      console.log('\nClosed out remaining connections');

      process.exit(0);
    });

    connections.forEach((curr) => curr.end());
    setTimeout(() => connections.forEach((curr) => curr.destroy()), 5000);
  };
}

process.on('SIGINT', shutDown('SIGINT'));

process.on('SIGTERM', shutDown('SIGTERM'));

process.on('exit', (code) => {
  console.log(`${code} received!`);
});
