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

  return <div>{instructionElements}</div>;
};

export default Instructions;
