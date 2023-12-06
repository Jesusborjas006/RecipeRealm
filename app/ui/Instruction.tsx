type InstructionProps = {
  instruction: any;
  number: number;
};

const Instruction = ({ instruction, number }: InstructionProps) => {
  return (
    <li className="my-6 flex ">
      <strong className="text-orange-500 mr-3">{number}</strong>
      <p>{instruction}</p>
    </li>
  );
};

export default Instruction;
