import * as express from "express";
import createUserRouter from "./userRouter";
import createCompanyRouter from "./companyRouter";
import createTravelRouter from "./travelRouter";

const createRouters = (app: express.Express) => {
  app.use("/users", createUserRouter());
  app.use("/companies", createCompanyRouter());
  app.use("/travels", createTravelRouter());
};

export default createRouters;
