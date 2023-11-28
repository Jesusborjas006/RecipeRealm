import { RecipeType } from "../lib/definitions";
import Recipe from "./Recipe";

type RecipesProps = {
  recipes: RecipeType[];
  getRecipeDetails: (id: number) => void;
};

const Recipes = ({ recipes, getRecipeDetails }: RecipesProps) => {
  const recipeElements = recipes.map((recipe) => (
    <Recipe
      key={recipe.id}
      id={recipe.id}
      image={recipe.image}
      name={recipe.name}
      getRecipeDetails={getRecipeDetails}
    />
  ));
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-10 ">
      {recipeElements}
    </div>
  );
};

export default Recipes;
