/* eslint-disable @typescript-eslint/no-explicit-any */
import * as express from 'express';
import cluster from 'cluster';
import os from 'os';
import http from 'http';

const { PORT } = process.env;

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof PORT === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`;
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

const createServer = (app: express.Express) => {
  if ((cluster as any).isMaster) {
    const n = os.cpus().length;
    for (let i = 0; i < n; i += 1) {
      (cluster as any).fork();
    }

    (cluster as any).on('online', function (worker) {
      console.log(`Filho inicializado pelo PID: ${worker.process.pid}`);
    });

    (cluster as any).on('exit', function (worker, code, signal) {
      console.log(`PID ${worker.process.pid} code: ${code} signal: ${signal}`);
      (cluster as any).fork();
    });
  } else {
    app.set('port', PORT);
    const server = http.createServer(app);
    server.listen(PORT);
    server.on('error', onError);
  }
};

export default createServer;
