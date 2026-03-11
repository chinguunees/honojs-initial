import { Context } from "hono";
import { foods } from "../../model/foods";
import { foodsTable } from "../../db/foods";
import { getDrizzleDb } from "../../db";

export const addFood = async (c: Context) => {
  const { title } = await c.req.json();
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzleDb(d1);
  const foods = await db.select().from(foodsTable);

  const newFood = {
    id: foods.length + 1,
    title: title,
  };

  const updatedFood = [...foods, newFood];
  console.log(foods);

  return c.json({ updatedFood });
};
