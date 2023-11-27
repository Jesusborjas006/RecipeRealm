"use client";

import { useState } from "react";
import { recipeData } from "../data/recipes";
import Recipe from "./Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState(recipeData);

  const recipeElements = recipes.map((recipe) => (
    <Recipe
      key={recipe.id}
      id={recipe.id}
      image={recipe.image}
      name={recipe.name}
    />
  ));
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-10 ">
      {recipeElements}
    </div>
  );
};

export default Recipes;
