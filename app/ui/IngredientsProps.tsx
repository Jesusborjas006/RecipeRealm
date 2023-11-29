import { IngredientType } from "../lib/definitions";

export type IngredientsProps = {
  recipeIngredients:
    | { id: number; quantity: { amount: number; unit: string } }[]
    | undefined;
  ingredients: IngredientType[];
};
