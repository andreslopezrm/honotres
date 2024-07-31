import { serve } from "@hono/node-server";
import { OpenAPIHono } from "@hono/zod-openapi";
import { createRouteList } from "./routes";


const app = new OpenAPIHono().basePath("/api");

const port = 3000;
createRouteList(app);

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
