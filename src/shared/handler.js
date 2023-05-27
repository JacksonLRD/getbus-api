import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { routes } from "../modules/users/userRouter.js";
import { DEFAULT_HEADER } from "./utils/defaultHeader.js";
import { dependencyInjection as userDI } from "../modules/users/dependencyInjection.js";

const currentDir = dirname(
  fileURLToPath(import.meta.url)
);

const filePath = join(currentDir, './database', 'data.json');

const userService = userDI({ filePath });

const userRoutes = routes({
  userService
})

export default function handler(request, response) {

  const allRoutes = {
    ...userRoutes,

    // 404 routes
    default: (request, response) => {
      response.writeHead(404, DEFAULT_HEADER);
      response.write('Not Found');
      response.end();
    }
  };

  const { url, method } = request;

  const pathName = url.split('?')[0];

  const key = `${pathName}:${method.toLowerCase()}`
  const chosen = allRoutes[key] || allRoutes.default

  return Promise.resolve(chosen(request, response))
    .catch(handlerError(response))
}

function handlerError(response) {
  return (error) => {
    console.error('FATAL ERROR', error.stack);
    response.writeHead(500, DEFAULT_HEADER);
    response.write(JSON.stringify({
      error: 'Internal Server Error'
    }));

    return response.end();
  }
}
