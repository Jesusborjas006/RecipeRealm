import { IngredientType } from "../lib/definitions";
import Ingredient from "./Ingredient";

type IngredientsProps = {
  recipeIngredients:
    | { id: number; quantity: { amount: number; unit: string } }[]
    | undefined;
  ingredients: IngredientType[];
};

const Ingredients = ({ recipeIngredients, ingredients }: IngredientsProps) => {
  const recipeIngredientsIds = recipeIngredients?.map(
    (ingredient) => ingredient.id
  );

  const ingredientsForRecipe = ingredients.filter((ingredient) => {
    return recipeIngredientsIds?.includes(ingredient.id);
  });

  console.log(ingredientsForRecipe);

  const ingredientElements = ingredientsForRecipe.map((ingredient) => (
    <Ingredient key={ingredient.id} name={ingredient.name} />
  ));

  return <ul>{ingredientElements}</ul>;
};

export default Ingredients;
