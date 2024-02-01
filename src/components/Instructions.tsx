import data from "../data.json";

const Instructions = () => {
  return (
    <div>
      <h2>Instructions</h2>
      <ol>
        {data.instructions.map((instruction) => (
          <li>
            {instruction.name}
            {instruction.description}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
