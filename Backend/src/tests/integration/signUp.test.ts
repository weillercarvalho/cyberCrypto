import { beforeAll, describe, expect, it } from "vitest";
import { cleanDb } from "../helpers.js";
import supertest from "supertest";
import server from "../../app.js";

beforeAll(async () => {
  await cleanDb();
});

const init = supertest(server);

describe("POST /signup", () => {
  it("should responde with status 400 if no body is given", async () => {
    const response = await init.post("/api/signup").send({})
    expect(response.status).toBe(400);
  });
});
