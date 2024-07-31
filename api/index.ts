import { OpenAPIHono } from "@hono/zod-openapi";
import { handle } from "hono/vercel";
import { createRouteList } from "../server/routes.js";

const app = new OpenAPIHono().basePath("/api");
createRouteList(app);
const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
