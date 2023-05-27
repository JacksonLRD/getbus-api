import { describe, it, mock } from "node:test";
import assert from "node:assert";

describe('User routes - endpoints test suit', async () => {
  const userServiceMock = {
    find: async () => stubResult
  };

  const endpoints = routes({
    userService: userServiceMock
  })

  it('GET: Should call /users:get', async () => {
    const stubResult = [
      {
        "id": "13f84173-4c25-458b-a85e-14fa4a471e25",
        "name": "Jackson Purdeus",
        "email": "jackson@jackson.com.br",
        "password": "jackson"
      }
    ]


  });

  it('POST: Should call /users:post', async () => {

  });
});
