"use client";

import { useState } from "react";
import Modal from "./ui/Modal";
import Recipes from "./ui/Recipes";
import { recipeData } from "./data/recipes";
import { ingredientsData } from "./data/ingredients";
import { RecipeType } from "./lib/definitions";

const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  const [recipes, setRecipes] = useState(recipeData);
  const [selectedRecipe, setSelectedRecipe] = useState<
    RecipeType | undefined
  >();
  const [ingredients] = useState(ingredientsData);

  modalActive
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const getRecipeDetails = (id: number) => {
    setModalActive(!modalActive);
    const recipe = recipes.find((recipe) => recipe.id === id);
    setSelectedRecipe(recipe);
  };

  return (
    <main className="max-w-[1640px] mx-auto p-8">
      <h1>RecipeRealm</h1>

      {modalActive && (
        <Modal
          selectedRecipe={selectedRecipe}
          ingredients={ingredients}
          setModalActive={setModalActive}
        />
      )}

      <Recipes recipes={recipes} getRecipeDetails={getRecipeDetails} />
    </main>
  );
};

export default Home;
