import CustomRouter from "./router/index.js";
import { routes } from "../modules/users/userRouter.js";
import config from "../config/env/default.js";

const PORT = config.app.port;

const app = CustomRouter();
routes(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  }
);
