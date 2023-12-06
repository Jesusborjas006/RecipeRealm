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
    <div className="md:w-[65%] md:mx-12 mt-10 md:mt-0">
      <h4 className="text-2xl font-semibold ">Directions</h4>
      <ul>{instructionElements}</ul>
    </div>
  );
};

export default Instructions;
