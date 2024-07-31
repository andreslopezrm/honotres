import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { handle } from "hono/vercel";
import { swaggerUI } from "@hono/swagger-ui";

const app = new OpenAPIHono().basePath("/api");

app.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        description: "Respond a message",
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      message: "hello",
    });
  },
);

app.get(
  "/ui",
  swaggerUI({
    url: "/doc",
  }),
);

app.doc("/doc", {
  info: {
    title: "An API",
    version: "v1",
  },
  openapi: "3.1.0",
});

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
