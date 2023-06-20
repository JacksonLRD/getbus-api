import http from "node:http";
import { DEFAULT_HEADER } from "../utils/defaultHeader.js";


/**
 * Creates a customRouter application
 */
export default function CustomRouter() {

  const httpVerbs = ["get", "post", "put", "patch"];
  const routes = {
    'default': (request, response) => {
      response.writeHead(404, DEFAULT_HEADER);
      response.write("Not Found");
      response.end();
    },
  };

  /**
   * Starts a server listening for connections
   * @param {number | undefined} port Port to run an application
   * @param callback Called when the server is running
   */
  function listen(port = 3000, callback = () => void 0) {
    http.createServer(_handler).listen(port, callback());
  }

  function _handler(req, res) {
    const { url, method } = req;
    const pathName = url.split("?")[0];
    const key = `${pathName}:${method.toLowerCase()}`;

    const route = routes[key] || routes.default;

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

  const { get, post, put, patch } = CustomRouter.prototype

  return {
    get,
    post,
    put,
    patch,
    listen
  }
}
