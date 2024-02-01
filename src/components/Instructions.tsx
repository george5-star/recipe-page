import data from "../data.json";

const Instructions = () => {
  return (
    <div className="my-4">
      <h2 className="subheading">Instructions</h2>
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
