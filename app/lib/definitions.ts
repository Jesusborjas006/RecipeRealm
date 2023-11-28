export type RecipeType = {
  id: number;
  image: string;
  ingredients: { id: number; quantity: { amount: number; unit: string } }[];
  instructions: { instruction: string; number: number }[];
  name: string;
  tags: string[];
};
