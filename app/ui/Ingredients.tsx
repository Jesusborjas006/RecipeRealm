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

  const nameOfIngredient = ingredientsNeeded.map(
    (ingredient) => ingredient.name
  );

  const ingredientElements = recipeIngredients?.map((ingredient, index) => (
    <Ingredient
      key={index}
      quantity={ingredient.quantity}
      name={nameOfIngredient[index]}
    />
  ));

  return <ul>{ingredientElements}</ul>;
};

export default Ingredients;

// const getIngredientCost = () => {
//   let ingredientCost = ingredientsNeeded.map(
//     (ingredient) => ingredient.estimatedCostInCents
//   );

//   let total = ingredientCost.reduce((acc, current) => {
//     return acc + current;
//   }, 0);

//   return total / 100;
// };
