import { RequestHandler, Router } from "express";
import { UserController } from "../controllers/UserController";
import Container from "typedi";
import {
  userAdminAuthorization,
  userCompanyAuthorization,
} from "../config/middlewares/userAuthorization";
import RequestWithUserData from "../infra/http/types/RequestWithUserData";
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
  router.post("/admin", userAdminAuthorization, (async (
    req: RequestWithUserData,
    res
  ) => {
    await getController().createdByAdmin(req, res);
  }) as RequestHandler);
  router.post("/company-user", userCompanyAuthorization, (async (
    req: RequestWithUserData,
    res
  ) => {
    await getController().createdByCompanyUser(req, res);
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
