import { describe, it, before, after } from "node:test";
import assert from "node:assert";
import { env } from "node:process";

describe("User Integration Test Suit", async () => {
  let _server = {};
  const PORT = env.PORT ?? 3344;
  const testServerAddress = `http://localhost:${PORT}/users`;

  before(async () => {
    _server = (await import("../../../src/shared/index.js")).server;

    await new Promise((resolve) => _server.once("listening", resolve));
  });

  after((done) => _server.close(done));

  it("Should create a user", async () => {
    const data = {
      name: "Jackson Purdeus",
      email: "jackson@jackson.com.br",
      password: "jackson",
    };

    const request = await fetch(testServerAddress, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await request.json();

    assert.deepStrictEqual(
      request.headers.get("content-type"),
      "application/json"
    );
    assert.deepStrictEqual(result.success, "User created with success!");
    assert.ok(result.id.length > 20);
  });
});
