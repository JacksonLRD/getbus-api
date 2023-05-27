import test from 'node:test';
import assert from 'node:assert';
import { promisify } from 'node:util';

test('User Integration Test Suit', async (t) => {

  const testPort = 4433;
  process.env.PORT = testPort;

  const { server } = await import('../../../src/shared/index.js');
  const testServerAddress = `http://localhost:${testPort}/users`;

  await t.test('It should create a user', async (t) => {
    const data = {
      name: 'Jackson Purdeus',
      email: 'jackson@jackson.com.br',
      password: 'jackson'
    }

    const request = await fetch(testServerAddress, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    const result = await request.json();

    assert.deepStrictEqual(
      request.headers.get('content-type'),
      'application/json'
    );
    assert.deepStrictEqual(
      result.success,
      'User created with success!'
    );
    assert.ok(
      result.id.length > 20
    );
  });

  await promisify(server.close.bind(server))()
});
