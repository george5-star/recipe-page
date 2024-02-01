import Instructions from "./components/Instructions";
import Introduction from "./components/Introduction";

const App = () => {
  return (
    <div className="container max-w-3xl mx-auto bg-neutral-white py-8 px-10 m-28 rounded-2xl">
      <Introduction />
      <Instructions />
    </div>
  );
};

export default App;
