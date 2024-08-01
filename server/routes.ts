import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { sign } from 'hono/jwt'
import { createRouteUno } from "./uno.js";


export const createRouteList = (app: OpenAPIHono) => {
  createRouteUno(app);

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
                token: z.string()
              }),
            },
          },
        },
      },
    }),
    async (c) => {
      const payload = {
        sub: 'user123',
        role: 'admin',
        exp: Math.floor(Date.now() / 1000) + 60 * 5, // Token expires in 5 minutes
      }
      const secret = 'mySecretKey'
      const token = await sign(payload, secret)

      return c.json({
        message: "hello from vercel",
        token
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
