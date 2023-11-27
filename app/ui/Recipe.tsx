import Image from "next/image";

const Recipe = ({ id, image, ingredients, instructions, name, tags }) => {
  return (
    <div>
      <Image src={image} alt={name} width={556} height={370} />
      <h3>{name}</h3>
    </div>
  );
};

export default Recipe;
