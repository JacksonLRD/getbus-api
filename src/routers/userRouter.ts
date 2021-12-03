import { RequestHandler, Router } from "express";
import { UserController } from "../controllers/UserController";
import Container from "typedi";
const router = Router();

const getController = (): UserController => {
  return Container.get<UserController>("UserController");
};

const createRouter = (): Router => {
  router.get("", (async (req, res) => {
    await getController().listWithCompany(req, res);
  }) as RequestHandler);
  router.get("/:id", (async (req, res) => {
    await getController().getWithCompany(req, res);
  }) as RequestHandler);
  router.post("/:id", (async (req, res) => {
    await getController().create(req, res);
  }) as RequestHandler);
  router.patch("", (async (req, res) => {
    await getController().update(req, res);
  }) as RequestHandler);
  router.delete("/:id", (async (req, res) => {
    await getController().delete(req, res);
  }) as RequestHandler);

  return router;
};

export default createRouter;
