import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";

export const createRouteList = (app: OpenAPIHono) => {
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
        message: "hello from vercel",
      });
    },
  );

  app.get(
    "/ui",
    swaggerUI({
      url: "/api/doc",
    }),
  );

  app.doc("/doc", {
    info: {
      title: "An API",
      version: "v1",
    },
    openapi: "3.1.0",
  });
};