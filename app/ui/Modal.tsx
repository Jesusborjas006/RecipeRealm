import { useState } from "react";
import { IngredientType, RecipeType } from "../lib/definitions";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

type ModalProps = {
  selectedRecipe: RecipeType | undefined;

  // Typescript gets mad when defining my IngredientType
  ingredients: any;
};

const Modal = ({ selectedRecipe, ingredients }: ModalProps) => {
  const [totalForRecipe, setTotalForRecipe] = useState(0);

  return (
    <div className="border">
      <h2>{selectedRecipe?.name}</h2>
      {`$${totalForRecipe}`}
      <Instructions recipeInstructions={selectedRecipe?.instructions} />

      <Ingredients
        recipeIngredients={selectedRecipe?.ingredients}
        ingredients={ingredients}
        setTotalForRecipe={setTotalForRecipe}
      />
    </div>
  );
};

export default Modal;
