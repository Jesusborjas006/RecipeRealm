import { IngredientType } from "../lib/definitions";
import { getRecipeIngredients } from "../lib/recipeFunctions";
import Ingredient from "./Ingredient";

type IngredientsProps = {
  recipeIngredients:
    | { id: number; quantity: { amount: number; unit: string } }[]
    | undefined;
  ingredients: IngredientType[];
};

const Ingredients = ({ recipeIngredients, ingredients }: IngredientsProps) => {
  const ingredientsNeeded = getRecipeIngredients(
    recipeIngredients,
    ingredients
  );

  const ingredientElements = ingredientsNeeded.map((ingredient) => (
    <Ingredient key={ingredient.id} name={ingredient.name} />
  ));

  return <ul>{ingredientElements}</ul>;
};

export default Ingredients;
