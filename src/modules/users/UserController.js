import { once } from "node:events";

import { DEFAULT_HEADER } from "../../shared/utils/defaultHeader.js";
import User from "./entities/User.js";

export default class UserController {
  constructor({ userService }) {
    this.userService = userService;
  }

  async find(req, res) {
    const users = await this.userService.find();

    res.writeHead(200, DEFAULT_HEADER);
    res.write(
      JSON.stringify({
        results: users,
      })
    );
    return res.end();
  }

  async create(req, res) {
    const data = await once(req, "data");
    const user = new User(JSON.parse(data));

    const id = await this.userService.create(user);

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
