import { Response, NextFunction } from "express";
import RequestWithUserData from "../../infra/http/types/RequestWithUserData";

export const userAdminAuthorization = (
  req: RequestWithUserData,
  res: Response,
  next: NextFunction
): void => {
  const { user } = req;
  if (!user) {
    res.status(401).send("Usuário não autenticado");
    return;
  }
  if (user.role !== "UsuarioAdministrador") {
    res.status(403).send("Usuário não tem acesso a essa rota");
    return;
  }
  next();
};

export const userCompanyAuthorization = (
  req: RequestWithUserData,
  res: Response,
  next: NextFunction
): void => {
  const { user } = req;
  if (!user) {
    res.status(401).send("Usuário não autenticado");
    return;
  }
  if (user.role !== "UsuarioDaCompanhia") {
    res.status(403).send("Usuário não tem acesso a essa rota");
    return;
  }
  next();
};

export const userPassengerAuthorization = (
  req: RequestWithUserData,
  res: Response,
  next: NextFunction
): void => {
  const { user } = req;
  if (!user) {
    res.status(401).send("Usuário não autenticado");
    return;
  }
  if (user.role !== "UsuarioPassageiro") {
    res.status(403).send("Usuário não tem acesso a essa rota");
    return;
  }
  next();
};
