require("dotenv").config();
const express = require("express");
const Server = require("./src/config/Server");
const config = require("./src/config/env/default");
const { MongoDb } = require("./src/core/database/mongo/Connection");

(async () => {
  const app = express();
  const router = express.Router();
  app.use(express.json());

  const connectionString = config.db.mongo.url;
  const db = new MongoDb(connectionString);
  await db.connect();

  Server.defineApp(app)
    .defineRepositories(db)
    .defineServices()
    .defineControllers()
    .loadRoutes(router)
    .runApplication(config.app.port);
})();
