import { CompanyController } from "controllers/CompanyController";
import { RequestHandler, Router } from "express";
import Container from "typedi";
const router = Router();

const getController = (): CompanyController => {
  return Container.get<CompanyController>("CompanyController");
};

const createRouter = (): Router => {
  router.get("", (async (req, res) => {
    await getController().list(req, res);
  }) as RequestHandler);
  router.get("/:id", (async (req, res) => {
    await getController().getById(req, res);
  }) as RequestHandler);
  router.post("", (async (req, res) => {
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
