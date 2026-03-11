import { Context } from "hono";
import { foods } from "../../model/foods";
import { foodsTable } from "../../db/foods";
import { getDrizzleDb } from "../../db";

export const updateFoods = async (c: Context) => {
  const { id } = c.req.param();
  const { title } = await c.req.json();
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzleDb(d1);
  const foods = await db.select().from(foodsTable);
  const updatedFoods = foods.map((food) => {
    if (String(food.id) === id) {
      const updatedFood = {
        id: food.id,
        title: title,
      };
      return updatedFood;
    } else {
      return food;
    }
  });

  return c.json({ updatedFoods });
};
