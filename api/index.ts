import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { handle } from "hono/vercel";
import { swaggerUI } from "@hono/swagger-ui";

export const config = {
  runtime: "edge",
};

const app = new OpenAPIHono().basePath("/api");

app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" });
});

app.get("/demo", (c) => {
  return c.json({ message: "Demos" });
});

app.get("/ui", swaggerUI({ url: "/doc" }));

export default handle(app);
