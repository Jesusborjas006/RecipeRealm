import Instruction from "./Instruction";

type InstructionsProps = {
  recipeInstructions: { instruction: string; number: number }[] | undefined;
};

const Instructions = ({ recipeInstructions }: InstructionsProps) => {
  const instructionElements = recipeInstructions?.map((element) => (
    <Instruction
      instruction={element.instruction}
      number={element.number}
      key={element.number}
    />
  ));

  return (
    <div className="mt-10">
      <h4 className="text-2xl font-bold my-4 ">Directions</h4>
      <ul>{instructionElements}</ul>
    </div>
  );
};

export default Instructions;
