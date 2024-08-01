import { serve } from "@hono/node-server";
import { OpenAPIHono } from "@hono/zod-openapi";
import { createRouteList } from "./routes.js";


const app = new OpenAPIHono().basePath("/api");

const port = Number(process.env.PORT) || 3000;
createRouteList(app);

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
