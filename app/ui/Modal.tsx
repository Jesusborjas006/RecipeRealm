import { IngredientType, RecipeType } from "../lib/definitions";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

type ModalProps = {
  selectedRecipe: RecipeType | undefined;

  // Typescript gets mad when defining my IngredientType
  ingredients: any;
};

const Modal = ({ selectedRecipe, ingredients }: ModalProps) => {
  return (
    <div className="border">
      <h2>{selectedRecipe?.name}</h2>
      <Instructions recipeInstructions={selectedRecipe?.instructions} />

      <Ingredients
        recipeIngredients={selectedRecipe?.ingredients}
        ingredients={ingredients}
      />
    </div>
  );
};

export default Modal;
