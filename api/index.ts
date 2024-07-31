import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { handle } from "hono/vercel";

const createRouteList = (app: OpenAPIHono) => {
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


const app = new OpenAPIHono().basePath("/api");
createRouteList(app)
const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
