import Instructions from "./components/Instructions";
import Introduction from "./components/Introduction";
import Nutrition from "./components/Nutrition";

const App = () => {
  return (
    <div className="container max-w-2xl mx-auto bg-neutral-white py-8 px-10 m-28 rounded-2xl">
      <Introduction />
      <Instructions />
      <Nutrition />
    </div>
  );
};

export default App;
