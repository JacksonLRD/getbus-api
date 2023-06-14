import http from "node:http";
import { DEFAULT_HEADER } from "../utils/defaultHeader.js";

export default function peri() {
  const routes = {
    default: (request, response) => {
      response.writeHead(404, DEFAULT_HEADER);
      response.write("Not Found");
      response.end();
    },
  };

  return {
    listen(port) {
      http.createServer(this._handler).listen(port);
    },

    /**
     *
     * @param {string} path
     * @param {*} controller
     */
    get(path, controller) {
      console.log(path);
      const pathN = path.concat(":", "get");

      Object.defineProperty(routes, pathN, {
        value: controller,
        writable: false,
      });
    },

    post(path, controller) {
      const pathN = path.concat(":", "post");

      Object.defineProperty(routes, pathN, {
        value: controller,
        writable: false,
      });
    },

    _handler(req, res) {
      const { url, method } = req;
      const pathName = url.split("?")[0];
      const key = `${pathName}:${method.toLowerCase()}`;

      console.log("routes\n", routes);

      const route = routes[key] || routes.default;
      console.log(route);

      return Promise.resolve(route(req, res)).catch(handleError(res));
    },
  };
}

function handleError(response) {
  return (error) => {
    console.error("FATAL ERROR", error.stack);
    response.writeHead(500, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        error: "Internal Server Error",
      })
    );

    return response.end();
  };
}
