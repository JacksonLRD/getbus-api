import { TravelController } from "controllers/TravelController";
import { RequestHandler, Router } from "express";
import Container from "typedi";
const router = Router();

const getController = (): TravelController => {
  return Container.get<TravelController>("TravelController");
};

const createRouter = (): Router => {
  router.get("", (async (req, res) => {
    await getController().getAllWithCompany(req, res);
  }) as RequestHandler);
  router.get("/:id", (async (req, res) => {
    await getController().getOneWithCompany(req, res);
  }) as RequestHandler);
  router.post("/:id", (async (req, res) => {
    await getController().create(req, res);
  }) as RequestHandler);
  router.patch("", (async (req, res) => {
    await getController().update(req, res);
  }) as RequestHandler);
  router.delete("/:id", (async (req, res) => {
    await getController().remove(req, res);
  }) as RequestHandler);

  return router;
};

export default createRouter;
