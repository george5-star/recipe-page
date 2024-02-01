import Ingredient from "./Ingredient";
import RecipeImage from "./RecipeImage";
import data from "../data.json";

const Introduction = () => {
  const preparationTimeList = data.preparationTime.map(
    (preparationTime, index) => (
      <li className="m-2 marker:text-primary-dark-raspberry" key={index}>
        <span className="font-bold">{preparationTime.name}:</span>{" "}
        {preparationTime.value}
      </li>
    )
  );
  return (
    <>
      <RecipeImage />
      <h1 className="my-8 text-4xl font-bold text-neutral-dark-charcoal font-serif">
        Simple Omelette Recipe
      </h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <div className="p-8 bg-neutral-eggshell m-4 rounded-lg">
        <h3 className="text-primary-dark-raspberry font-bold">
          Preparation time
        </h3>
        <ul className="list-disc list-inside ps-4">{preparationTimeList}</ul>
      </div>
      <Ingredient />
    </>
  );
};

export default Introduction;
