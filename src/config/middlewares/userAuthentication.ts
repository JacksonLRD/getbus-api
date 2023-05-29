import { TokenPayload } from "../../types/middlewares/TokenPayLoad";
import { NextFunction, Response } from "express";
import RequestWithUserData from "../../infra/http/types/RequestWithUserData";
import { verify } from "jsonwebtoken";

export const userAuthentication = (
  req: RequestWithUserData,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(401).send("Usuário não autorizado");
    return;
  }

  try {
    const payload = verify(
      authorization,
      process.env.AUTH_SECRET
    ) as TokenPayload;
    req.user = payload;
  } catch (error) {
    res.status(403).send("Usuário não permitido");
    return;
  }

  next();
};
