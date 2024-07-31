/*import { Hono } from "hono";
import { handle } from "hono/vercel";
import { swaggerUI } from "@hono/swagger-ui";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" });
});

app.get("/demo", (c) => {
  return c.json({ message: "Demos" });
});

app.get("/ui", swaggerUI({ url: "/doc" }));

export default handle(app);*/

import { Hono } from "hono";
import { handle } from "@hono/node-server/vercel";

export const config = {
  runtime: "nodejs",
};

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});

app.get("/demo", (c) => {
  return c.json({ message: "Demos node" });
});

export default handle(app);
