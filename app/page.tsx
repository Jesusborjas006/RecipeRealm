"use client";

import { useState } from "react";
import Modal from "./ui/Modal";
import Recipes from "./ui/Recipes";
import { recipeData } from "./data/recipes";
import { RecipeType } from "./lib/definitions";

const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  const [recipes, setRecipes] = useState(recipeData);
  const [selectedRecipe, setSelectedRecipe] = useState<
    RecipeType | undefined
  >();

  // console.log(selectedRecipe);

  const getRecipeDetails = (id: number) => {
    setModalActive(!modalActive);
    const recipe = recipes.find((recipe) => recipe.id === id);
    setSelectedRecipe(recipe);
  };

  return (
    <main className="max-w-[1640px] mx-auto p-8">
      <h1>RecipeRealm</h1>

      {modalActive && <Modal selectedRecipe={selectedRecipe} />}

      {!modalActive && (
        <Recipes recipes={recipes} getRecipeDetails={getRecipeDetails} />
      )}
    </main>
  );
};

export default Home;
