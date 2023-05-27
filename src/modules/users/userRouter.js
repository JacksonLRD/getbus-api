import { once } from "node:events";

import { DEFAULT_HEADER } from "../../shared/utils/defaultHeader.js";
import User from "./entities/User.js";

export const routes = ({
  userService
}) => ({
  '/users:get': async (request, response) => {
    const users = await userService.find();

    response.writeHead(200, DEFAULT_HEADER);
    response.write(JSON.stringify({
      results: users
    }));
    return response.end();
  },

  '/users:post': async (request, response) => {
    const data = await once(request, 'data');
    const user = new User(JSON.parse(data));

    const id = await userService.create(user);

    response.writeHead(201, DEFAULT_HEADER);
    response.write(JSON.stringify({
      id,
      success: 'User created with success!'
    }));
    return response.end();
  },
});
