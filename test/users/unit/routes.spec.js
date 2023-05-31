import { describe, it, mock, beforeEach } from "node:test";
import assert from "node:assert";

import { userContainer } from "../../../src/modules/users/userContainer.js";
import { filePath } from "../../../src/shared/handler.js";

describe("User Unit Test Suit", async () => {
  beforeEach(() => mock.restoreAll());

  const userController = userContainer({ filePath });

  it("GET: Should call /users:get", async () => {
    const stubResult = [
      {
        id: "13f84173-4c25-458b-a85e-14fa4a471e25",
        name: "Jackson Purdeus",
        email: "jackson@jackson.com.br",
        password: "jackson",
      },
    ];

    mock
      .method(userController, userController.find.name)
      .mock.mockImplementation(async () => stubResult);

    const result = await userController.find();

    assert.deepStrictEqual(userController.find.mock.callCount(), 1);
  });

  it("POST: Should call /users:post", async () => {});
});
