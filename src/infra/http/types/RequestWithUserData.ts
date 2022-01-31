import { Request } from "express";
import { TokenPayload } from "../../../types/middlewares/TokenPayLoad";

export default interface RequestWithUserData extends Request {
  user: TokenPayload;
}
