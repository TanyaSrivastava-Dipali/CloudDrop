import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import app from "../src/app.js";

let server;
let baseUrl;

before(() => {
  // Port 0 lets the OS pick a free port, so tests never clash with a running server
  server = app.listen(0);
  baseUrl = `http://localhost:${server.address().port}`;
});

after(() => {
  server.close();
});

test("GET / returns the welcome message", async () => {
  const res = await fetch(`${baseUrl}/`);
  assert.equal(res.status, 200);

  const body = await res.json();
  assert.deepEqual(body, {
    success: true,
    message: "Welcome to my Cloud Drop application",
  });
});

test("unknown route returns 404", async () => {
  const res = await fetch(`${baseUrl}/does-not-exist`);
  assert.equal(res.status, 404);
});
