import Ingredient from "./Ingredient";
import RecipeImage from "./RecipeImage";

const Introduction = () => {
  return (
    <>
      <RecipeImage />
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <div>
        <h3>Preparation time</h3>
        <ul>
          <li>Total: Approximately 10 minutes</li>
          <li>Preparation: 5 minutes</li>
          <li>Cooking: 5 minutes</li>
        </ul>
      </div>
      <Ingredient />
    </>
  );
};

export default Introduction;
