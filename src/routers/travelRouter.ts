import { RequestHandler, Router } from "express";
import { TravelController } from "../controllers/TravelController";
import Container from "typedi";
import { userCompanyAuthorization } from "../config/middlewares/userAuthorization";
import RequestWithUserData from "../infra/http/types/RequestWithUserData";
const router = Router();

const getController = (): TravelController => {
  return Container.get<TravelController>("TravelController");
};

const createRouter = (): Router => {
  router.get("", userCompanyAuthorization, (async (
    req: RequestWithUserData,
    res
  ) => {
    await getController().getAllWithCompany(req, res);
  }) as RequestHandler);
  router.get("/:id", userCompanyAuthorization, (async (
    req: RequestWithUserData,
    res
  ) => {
    await getController().getOneWithCompany(req, res);
  }) as RequestHandler);
  router.post("", userCompanyAuthorization, (async (
    req: RequestWithUserData,
    res
  ) => {
    await getController().create(req, res);
  }) as RequestHandler);
  router.patch("", userCompanyAuthorization, (async (
    req: RequestWithUserData,
    res
  ) => {
    await getController().update(req, res);
  }) as RequestHandler);
  router.delete("/:id", userCompanyAuthorization, (async (
    req: RequestWithUserData,
    res
  ) => {
    await getController().remove(req, res);
  }) as RequestHandler);

  return router;
};

export default createRouter;
