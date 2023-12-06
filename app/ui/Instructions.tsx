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
    <div className="w-[65%] mx-12">
      <h4 className="text-[1.7rem] font-semibold ">Directions</h4>
      <ul>{instructionElements}</ul>
    </div>
  );
};

export default Instructions;
