const request = require("supertest");
const app = require("../app");

describe("GET / ", () => {
  test("should respond with an hello world", async () => {
    const response = await request(app).get("/");
    expect(response.text).toEqual('"Hello world"');
    expect(response.statusCode).toBe(200);
  });
});
