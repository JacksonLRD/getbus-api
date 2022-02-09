import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import TokenPayload from '../../../../modules/users/interfaces/middlewares/TokenPayLoad';
import RequestWithUserData from '../types/RequestWithUserData';

const userAuthentication = (req: RequestWithUserData, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send('Usuário não autorizado');
    return;
  }

  try {
    const payload = verify(authorization, process.env.AUTH_SECRET) as TokenPayload;
    req.user = payload;
  } catch (error) {
    res.status(403).send('Usuário não permitido');
    return;
  }

  next();
};

export default userAuthentication;
