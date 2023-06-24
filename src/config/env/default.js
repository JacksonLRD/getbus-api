import iracenv from "../../shared/utils/iracenv.js";
import { env } from "node:process"
import debug from "../../shared/utils/debug.js";

await iracenv.config()

export default {
  app: {
    port: env.PORT || 4400,
    debug: env.DEBUG === "active" || false
  }
}
