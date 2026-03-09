import { Hono } from "hono";
import { registerFoodsRoute } from "./routes/foods.route";

const app = new Hono();

registerFoodsRoute(app);

export default app;
