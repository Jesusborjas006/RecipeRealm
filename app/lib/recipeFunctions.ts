import { IngredientType } from "./definitions";

export const getRecipeIngredients = (
  selectedRecipeIngredients: { id: number }[] | undefined,
  ingredients: IngredientType[]
) => {
  const recipeIngredientsIds = selectedRecipeIngredients?.map(
    (ingredient) => ingredient.id
  );
  const ingredientsForRecipe = ingredients.filter((ingredient) => {
    return recipeIngredientsIds?.includes(ingredient.id);
  });
  return ingredientsForRecipe;
};
