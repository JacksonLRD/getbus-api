import { Request } from 'express';
import TokenPayload from '../../../../modules/users/interfaces/middlewares/TokenPayLoad';

export default interface RequestWithUserData extends Request {
  user: TokenPayload;
}
