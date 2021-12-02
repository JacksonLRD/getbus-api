import * as express from "express";
import createUserRouter from "./userRouter";
import createCompanyRouter from "./companyRouter";

const createRouters = (app: express.Express) => {
  app.use("/users", createUserRouter());
  app.use("/companies", createCompanyRouter());
};

export default createRouters;
