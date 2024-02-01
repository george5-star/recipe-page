import data from "../data.json";

const Ingredient = () => {
  const ingredientsLists = data.ingredients.map((ingredient: string) => (
    <li>{ingredient}</li>
  ));
  return (
    <>
      <h2>Ingredient</h2>
      <ul>{ingredientsLists}</ul>
    </>
  );
};

export default Ingredient;
