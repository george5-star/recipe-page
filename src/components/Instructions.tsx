import data from "../data.json";

const Instructions = () => {
  return (
    <div className="my-4">
      <h2 className="subheading">Instructions</h2>
      <ol className="list-decimal list-outside border-line">
        {data.instructions.map((instruction, index) => (
          <li
            className="my-4 marker:text-primary-nutmeg ps-5 marker:font-bold"
            key={index}
          >
            <span className="font-semibold">{instruction.name}</span>{" "}
            {instruction.description}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
