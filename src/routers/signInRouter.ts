import { RequestHandler, Router } from "express";
import { UserController } from "../controllers/UserController";
import Container from "typedi";
const router = Router();

const getController = (): UserController => {
  return Container.get<UserController>("UserController");
};

const createRouter = (): Router => {
  router.post("", (async (req, res) => {
    await getController().authenticate(req, res);
  }) as RequestHandler);

  return router;
};

export default createRouter;
