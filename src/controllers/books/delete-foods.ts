import { Context } from "hono";
import { foods } from "../../model/foods";

export const deleteFoods = async (c: Context) => {
  const { id } = c.req.param();
  const { title } = await c.req.json();
  const findFood = foods.find((food) => String(food.id) !== id);
  if (!findFood) {
    return c.status(404);
  }

  const filteredFoods = foods.filter((food) => String(food.id) !== id);

  return c.json({ filteredFoods });
};
