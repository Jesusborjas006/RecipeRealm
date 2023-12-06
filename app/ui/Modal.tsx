import { Dispatch, SetStateAction, useState } from "react";
import { IngredientType, RecipeType } from "../lib/definitions";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Image from "next/image";

type ModalProps = {
  selectedRecipe: RecipeType | undefined;

  // Typescript gets mad when defining my IngredientType
  ingredients: any;
  setModalActive: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ selectedRecipe, ingredients, setModalActive }: ModalProps) => {
  const [totalForRecipe, setTotalForRecipe] = useState(0);

  return (
    <div className=" bg-black/75 w-full h-screen z-10 fixed top-0 right-0 ">
      <div className="border fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg px-8 py-4 max-h-[90%] min-w-[90%] overflow-scroll md:overflow-hidden">
        <p
          className="cursor-pointer font-medium text-2xl flex justify-end"
          onClick={() => setModalActive(false)}
        >
          X
        </p>

        <div className="flex flex-col md:flex-row mt-6 md:items-center ">
          <Image
            className="rounded-lg mb-6  w-full md:w-[35%]"
            src={selectedRecipe!.image}
            alt={selectedRecipe!.image}
            width={556}
            height={370}
          />

          <div className="lg:w-[65%] md:mx-12">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6">
              {selectedRecipe?.name}
            </h2>
            <button className="bg-orange-400 text-white w-full p-2 rounded-md font-bold text-lg">
              Save Recipe
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start mt-10  overflow-scroll md:h-[400px]">
          <Ingredients
            recipeIngredients={selectedRecipe?.ingredients}
            ingredients={ingredients}
            setTotalForRecipe={setTotalForRecipe}
          />

          <Instructions recipeInstructions={selectedRecipe?.instructions} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
