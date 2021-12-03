import * as express from "express";
import createUserRouter from "./userRouter";
import createCompanyRouter from "./companyRouter";
import createTravelRouter from "./travelRouter";
import createAuthenticationRouter from "./signInRouter";
import { userAuthentication } from "../config/middlewares/userAuthentication";

const createRouters = (app: express.Express) => {
  app.use("/users/sing-in", createAuthenticationRouter());
  app.use("/users", userAuthentication, createUserRouter());
  app.use("/companies", userAuthentication, createCompanyRouter());
  app.use("/travels", userAuthentication, createTravelRouter());
};

export default createRouters;
