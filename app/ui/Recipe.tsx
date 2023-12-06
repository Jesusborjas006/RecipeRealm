import Image from "next/image";

type RecipeProps = {
  id: number;
  image: string;
  name: string;
  getRecipeDetails: (id: number) => void;
};

const Recipe = ({ id, image, name, getRecipeDetails }: RecipeProps) => {
  return (
    <div
      className="border rounded-lg cursor-pointer relative hover:shadow-lg"
      onClick={() => getRecipeDetails(id)}
    >
      <Image
        className="rounded-t-lg"
        src={image}
        alt={name}
        width={556}
        height={370}
      />
      <h3 className="m-4 font-medium md:font-semibold md:text-lg lg:font-semibold lg:text-xl">
        {name}
      </h3>

      <div className="py-6">
        <button className="absolute right-2 bottom-2 rounded-lg px-2 py-1 bg-orange-400 text-white font-medium text-sm md:text-base hover:bg-orange-700">
          Save
        </button>
      </div>
    </div>
  );
};

export default Recipe;
