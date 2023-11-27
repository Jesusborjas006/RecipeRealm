import Image from "next/image";

type RecipeProps = {
  id: number;
  image: string;
  name: string;
};

const Recipe = ({ id, image, name }: RecipeProps) => {
  return (
    <div className="border rounded-lg text-center cursor-pointer">
      <Image
        className=" rounded-t-lg"
        src={image}
        alt={name}
        width={556}
        height={370}
      />
      <h3 className="p-4">{name}</h3>
    </div>
  );
};

export default Recipe;
