import iracenv from "./utils/iracenv.js";
import customRouter from "./router/index.js";
import { routes } from "../modules/users/userRouter.js";

await iracenv.config();

const PORT = process.env.PORT || 3344;

const app = customRouter();

routes(app);
const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);

export { server };
