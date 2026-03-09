import { Context } from "hono";
import { foods } from "../../model/foods";

export const getFood = (c: Context) => {
  return c.json({ foods });
};
