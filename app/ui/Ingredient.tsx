type IngredientType = {
  name: string;

  // Must fix this
  quantity: any;
};

const Ingredient = ({ quantity, name }: IngredientType) => {
  return (
    <li className="border-b pb-2 my-4 text-lg">
      {Number(quantity.amount).toFixed(2)} {quantity.unit} {name}
    </li>
  );
};

export default Ingredient;
