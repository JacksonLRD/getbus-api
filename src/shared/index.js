import CustomRouter from "./router/index.js";
import { routes } from "../modules/users/userRouter.js";
import config from "../config/env/default.js";
import debug from "./utils/debug.js";

const app = CustomRouter();
debug.active = config.log.debug;
const PORT = config.app.port;

routes(app);
const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);

export { server };
