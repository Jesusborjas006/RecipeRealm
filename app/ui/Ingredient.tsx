type IngredientType = {
  name: string;

  // Must fix this
  quantity: any;
};

const Ingredient = ({ quantity, name }: IngredientType) => {
  return (
    <>
      <li>
        {quantity.amount} {quantity.unit} {name}
      </li>
    </>
  );
};

export default Ingredient;
