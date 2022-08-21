import * as express from 'express';

const createServer = (app: express.Express) => {
  const { PORT } = process.env;
  app.listen(PORT, () => {
    console.log(`Application[DEV] running on port ${PORT}`);
  });
};

export default createServer;
