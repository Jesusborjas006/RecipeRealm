type IngredientType = {
  name: string;

  // Must fix this
  quantity: any;
};

const Ingredient = ({ quantity, name }: IngredientType) => {
  const getQuantityElement = () => {
    if (String(quantity.amount.length >= 3)) {
      return Number(quantity.amount.toFixed(2));
    }
  };

  return (
    <li className="border-b pb-2 my-4 text-lg">
      {getQuantityElement()} {quantity.unit} {name}
    </li>
  );
};

export default Ingredient;
