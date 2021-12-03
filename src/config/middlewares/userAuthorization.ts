import { Response, NextFunction } from "express";
import RequestWithUserData from "../../infra/http/types/RequestWithUserData";

export const userAdminAuthorization = (
  req: RequestWithUserData,
  res: Response,
  next: NextFunction
): void => {
  const { user } = req;

  if (user.role !== "UsuárioAdministrador") {
    res.status(403).send("Usuário não tem acesso a essa rota");
    return;
  }

  next();
};
