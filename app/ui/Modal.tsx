import { RecipeType } from "../lib/definitions";
import Instructions from "./Instructions";

type ModalProps = {
  selectedRecipe: RecipeType | undefined;
};

const Modal = ({ selectedRecipe }: ModalProps) => {
  return (
    <div className="border">
      <h2>{selectedRecipe?.name}</h2>
      <Instructions recipeInstructions={selectedRecipe?.instructions} />
    </div>
  );
};

export default Modal;
