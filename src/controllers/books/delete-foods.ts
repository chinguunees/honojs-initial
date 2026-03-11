import { Context } from "hono";
import { foods } from "../../model/foods";
import { foodsTable } from "../../db/foods";
import { getDrizzleDb } from "../../db";

export const deleteFoods = async (c: Context) => {
  const { id } = c.req.param();
  const { title } = await c.req.json();
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzleDb(d1);
  const foods = await db.select().from(foodsTable);
  const findFood = foods.find((food) => String(food.id) !== id);
  if (!findFood) {
    return c.status(404);
  }

  const filteredFoods = foods.filter((food) => String(food.id) !== id);

  return c.json({ filteredFoods });
};
