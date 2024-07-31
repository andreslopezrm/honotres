import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";

export const createRouteUno = (app: OpenAPIHono) => { 
    app.openapi(
        createRoute({
          method: "get",
          path: "/uno",
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
            message: "uno",
          });
        },
      );
}