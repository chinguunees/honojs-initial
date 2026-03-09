import { Context } from "hono";
import { foods } from "../../model/foods";

export const updateFoods = async (c: Context) => {
  const { id } = c.req.param();
  const { title } = await c.req.json();
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
