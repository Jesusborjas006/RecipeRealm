export type RecipeType = {
  id: number;
  image: string;
  ingredients: { id: number; quantity: { amount: number; unit: string } }[];
  instructions: { instruction: string; number: number }[];
  name: string;
  tags: string[];
};

export type IngredientType = {
  estimatedCostInCents: number;
  id: number;
  name: string;
};
