import { test, mock } from "node:test";
import assert from "node:assert";

test("User Unit Test Suit", async (t) => {
  const userServiceMock = {
    find: async () => stubResult,
  };

  const endpoints = routes({
    userService: userServiceMock,
  });

  await t.test("GET: Should call /users:get", async () => {
    const stubResult = [
      {
        id: "13f84173-4c25-458b-a85e-14fa4a471e25",
        name: "Jackson Purdeus",
        email: "jackson@jackson.com.br",
        password: "jackson",
      },
    ];
  });

  await t.test("POST: Should call /users:post", async () => {});
});
