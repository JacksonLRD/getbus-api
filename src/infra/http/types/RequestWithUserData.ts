import { Request } from "express";
import { TokenPayload } from "../../../@types/middlewares/tokenPayLoad";

export default interface RequestWithUserData extends Request {
  user: TokenPayload;
}
