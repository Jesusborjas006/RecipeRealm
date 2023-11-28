type InstructionProps = {
  instruction: any;
  number: number;
};

const Instruction = ({ instruction, number }: InstructionProps) => {
  return (
    <p className="">
      <strong>Step {number}:</strong> {instruction}
    </p>
  );
};

export default Instruction;
