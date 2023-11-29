type IngredientType = {
  name: string;
};

const Ingredient = ({ name }: IngredientType) => {
  return <li>{name}</li>;
};

export default Ingredient;
