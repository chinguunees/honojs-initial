import { getFood } from "../controllers/books/get-foods";
import { addFood } from "../controllers/books/post-foods";
import { updateFoods } from "../controllers/books/edit-foods";
import { deleteFoods } from "../controllers/books/delete-foods";
import { App } from "../types";

export const registerFoodsRoute = (app: App) => {
  app.get("/", (c) => {
    return c.text("Hello Hono!");
  });

  app.get("/foods", getFood);

  app.post("/foods", addFood);

  app.put("/foods/:id", updateFoods);

  app.delete("/foods/:id", deleteFoods);
};
