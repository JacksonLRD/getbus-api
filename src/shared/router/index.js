import http from "node:http";

import { DEFAULT_HEADER } from "../utils/defaultHeader.js";
import debug from "../utils/debug.js";

  const httpVerbs = ["GET", "POST", "PUT", "DELETE", "PATCH"];
  const routes = {
    'default': (request, response) => {
      response.writeHead(404, DEFAULT_HEADER);
      response.write("Not Found");
      response.end();
    },
  };

/**
 * Creates a customRouter application
 */
export default function CustomRouter() {

  /**
   * Starts a server listening for connections
   * @param {number | undefined} port Port to run an application
   * @param callback Called when the server is running
   */
  function listen(port = 3000, callback = () => void 0) {
    http.createServer(_handler).listen(port, callback());
  }

  function _handler(req, res) {
    const { url, method, headers } = req;

    const parsedURL = new URL(url, `http://${headers.host}`)


    const pathName = url.split("?")[0];
    const key = `${pathName}:${method}`;

    const route = routes[key] || routes.default;
    debug().log(`->src/shared/router/index.js\n ->Route called:\n  ${key}`)

    return Promise.resolve(route(req, res)).catch(_ErrorHandler(res));
  }

  function _ErrorHandler(response) {
    return (error) => {
      console.error("FATAL ERROR", error);
      response.writeHead(500, DEFAULT_HEADER);
      response.write(
        JSON.stringify({
          error: "Internal Server Error",
        })
      );

      return response.end();
    };
  }

  void function _addMethods() {
    for (let method of httpVerbs) {
      CustomRouter.prototype[method] = function (path, handler) {
        const route = path.concat(":", method);

        routes[route] = handler;
      };
    }
  }()

  const { GET, POST, PUT, PATCH, DELETE } = CustomRouter.prototype
  return {
    get: GET,
    post: POST,
    put: PUT,
    patch: PATCH,
    delete: DELETE,
    listen,
  }
}
