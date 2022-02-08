import { Request } from "express";
import { TokenPayload } from "../../../../modules/users/middlewares/TokenPayLoad";

export default interface RequestWithUserData extends Request {
  user: TokenPayload;
}
