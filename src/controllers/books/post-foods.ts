import { Context } from "hono";
import { foods } from "../../model/foods";

export const addFood = async (c: Context) => {
  const { title } = await c.req.json();

  const newFood = {
    id: foods.length + 1,
    title: title,
  };

  const updatedFood = [...foods, newFood];
  console.log(foods);

  return c.json({ updatedFood });
};
