"use client";

import { useState } from "react";
import { recipeData } from "../data/recipes";
import Recipe from "./Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState(recipeData);
  console.log(recipes);

  const recipeElements = recipes.map((recipe) => (
    <Recipe
      key={recipe.id}
      id={recipe.id}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      name={recipe.name}
      tags={recipe.tags}
    />
  ));
  return (
    <>
      <p>Recipes go here!</p>
      {recipeElements}
    </>
  );
};

export default Recipes;
