import data from "../data.json";

const Ingredient = () => {
  const ingredientsLists = data.ingredients.map((ingredient, index) => (
    <li className="marker:text-primary-nutmeg my-3" key={index}>
      {ingredient}
    </li>
  ));
  return (
    <>
      <h2 className="subheading">Ingredient</h2>
      <ul className="list-disc list-inside border-line">{ingredientsLists}</ul>
    </>
  );
};

export default Ingredient;
