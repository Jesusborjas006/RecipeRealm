import { Dispatch, SetStateAction, useEffect } from "react";
import { IngredientType } from "../lib/definitions";
import { getRecipeIngredients } from "../lib/recipeFunctions";
import Ingredient from "./Ingredient";

type IngredientsProps = {
  recipeIngredients:
    | { id: number; quantity: { amount: number; unit: string } }[]
    | undefined;
  ingredients: IngredientType[];
  setTotalForRecipe: Dispatch<SetStateAction<number>>;
};

const Ingredients = ({
  recipeIngredients,
  ingredients,
  setTotalForRecipe,
}: IngredientsProps) => {
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

  const getIngredientCost = () => {
    let ingredientCost = ingredientsNeeded.map(
      (ingredient) => ingredient.estimatedCostInCents
    );

    let total = recipeIngredients!.reduce((acc, current, index) => {
      return (acc += current.quantity.amount * ingredientCost[index]);
    }, 0);

    setTotalForRecipe(Number((total / 100).toFixed(2)));
    return Number((total / 100).toFixed(2));
  };

  useEffect(() => {
    setTotalForRecipe(getIngredientCost());
  }, []);

  return (
    <div className="w-[35%]">
      <h4 className="text-[1.7rem] font-semibold mb-6">Ingredients</h4>
      <ul className=" text-gray-700">{ingredientElements}</ul>
    </div>
  );
};

export default Ingredients;
