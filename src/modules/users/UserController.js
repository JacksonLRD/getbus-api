import { once } from "node:events";

import { DEFAULT_HEADER } from "../../shared/utils/defaultHeader.js";
import User from "./entities/User.js";
import { userContainer } from "./userContainer.js";

export default class UserController {
  static async find(req, res) {
    const userService = userContainer().userService;

    const users = await userService.find();

    res.writeHead(200, DEFAULT_HEADER);
    res.write(
      JSON.stringify({
        users,
      })
    );
    return res.end();
  }

  static async findById(req, res) {
    const userService = userContainer().userService;

    const user = await userService.findById(req.params.id);

    res.writeHead(200, DEFAULT_HEADER);
    res.write(
      JSON.stringify({
        user,
      })
    );
    return res.end();
  }

  static async create(req, res) {
    const data = await once(req, "data");
    const user = new User(JSON.parse(data));

    const userService = userContainer().userService;

    const id = await userService.create(user);

    res.writeHead(201, DEFAULT_HEADER);
    res.write(
      JSON.stringify({
        id,
        success: "User created with success!",
      })
    );
    return res.end();
  }
}
