import http from "node:http";
import { DEFAULT_HEADER } from "../utils/defaultHeader.js";

export default function customRouter() {
  const routes = {
    default: (request, response) => {
      response.writeHead(404, DEFAULT_HEADER);
      response.write("Not Found");
      response.end();
    },
  };

  function listen(port, cb) {
    http.createServer(_handler).listen(port, cb());
  }

  function get(path, controller) {
    const route = path.concat(":", "get");

    routes[route] = controller;
  }

  function post(path, controller) {
    const route = path.concat(":", "post");

    routes[route] = controller;
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

  return {
    listen,
    get,
    post,
  };
}
